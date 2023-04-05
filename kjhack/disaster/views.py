from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.generics import GenericAPIView
import razorpay, environ
from .serializers import DisasterSerializer, VolunteerSerializer, DonationSerializer, ReportSerializer, FoundSerializer, OrganizationSerializer, OrderDetailsSerializer,PaymentDetailsSerializer
from .models import Disaster, Volunteer, Donation, Report, Found, Organization, Order, Payment
from rest_framework.response import Response

env = environ.Env()
environ.Env.read_env()

@api_view(['GET'])
def org(request):
    organizations = Organization.objects.all()
    serializer = OrganizationSerializer(organizations, many=True)
    return JsonResponse(serializer.data, safe = False)

@api_view(['GET'])
def disaster_list(request):
    disasters = Disaster.objects.filter(active = True)
    serializer = DisasterSerializer(disasters, many=True)
    return JsonResponse(serializer.data, safe = False)

class VolunteerAPI(GenericAPIView):
    serializer_class = VolunteerSerializer

    def get(self,request):
        disaster_id = request.query_params['disaster']

        volunteers = Volunteer.objects.filter(disaster = disaster_id)
        serializer = self.serializer_class(volunteers, many = True)
        return JsonResponse(serializer.data, safe = False)

    def post(self,request):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return JsonResponse(serializer.data, safe = False)
        return JsonResponse(serializer.error, safe = False)

class DonationAPI(GenericAPIView):
    serializer_class = DonationSerializer

    def get(self,request):
        donations = Donation.objects.filter(success = True)
        count = 0
        for i in donations:
            count += i.amount
        serializer = self.serializer_class(donations, many = True)
        return JsonResponse([{"Total Donations":count}]+serializer.data, safe = False)

    def post(self,request):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return JsonResponse(serializer.data, safe = False)
        return JsonResponse(serializer.error, safe = False)

@api_view(['POST'])
def handlepayment(request):
    donation = Donation.objects.get(phone = request.data['phone'])
    if request.data['status'] == 'success':
        donation.success = True
    else:
        donation.success = False
    donation.save()
    serializer = DonationSerializer(donation)
    return JsonResponse(serializer.data, safe = False)

class ReportAPI(GenericAPIView):
    serializer_class = ReportSerializer

    def get(self,request):
        disaster_id = request.query_params['disaster']
        reports = Report.objects.filter(disaster = disaster_id)
        serializer = self.serializer_class(reports, many = True)
        return JsonResponse(serializer.data, safe = False)

    def post(self,request):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return JsonResponse(serializer.data, safe = False)
        return JsonResponse(serializer.error, safe = False)

@api_view(['POST'])
def found(request):
    serializer = FoundSerializer(data = request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return JsonResponse(serializer.data, safe = False)
    return JsonResponse(serializer.error, safe = False)

class SearchAPI(GenericAPIView):
    serializer_class = FoundSerializer

    def get(self,request):
        found = Found.objects.all()
        serializer = self.serializer_class(found, many = True)
        return JsonResponse(serializer.data, safe = False)

    def post(self,request):
        report_id = request.data['report']
        report = Report.objects.get(id=report)
        report.found = True
        report.save()
        return JsonResponse({'success':'success'}, safe = False)

class RazorPayOrder(GenericAPIView):

    serializer_class = OrderDetailsSerializer
    
    def post(self,request,*args,**kwargs):
        client = razorpay.Client(auth=(env("KEY_ID"), env("KEY_SECRET")))
        client.set_app_details({"title" : "Disaster", "version" : "1.0.0"})
        amount = request.data['order_amount']
        name = request.data['order_product']
        data = { "amount": amount, "currency": "INR", "payment_capture": "1" }
        payment = client.order.create(data=data)
        order = Order.objects.create(order_product=name, order_amount=amount, order_payment_id=payment['id'])
        serializer = self.serializer_class(order)
        data = {
        "payment": payment,
        "order": serializer.data
        }
        return Response(data)

class PaymentDetailsView(GenericAPIView):

    serializer_class = PaymentDetailsSerializer

    def post(self,request,*args,**kwargs):
        razorpay_payment_id = request.data['razorpay_payment_id']
        razorpay_order_id = request.data['razorpay_order_id']
        razorpay_signature = request.data['razorpay_signature']
        client = razorpay.Client(auth = ('[key_id]', '[key_secret]'))
        trusted_order = Order.objects.get(order_payment_id=razorpay_order_id)
        if trusted_order:
            params_dict={
                'razorpay_order_id': razorpay_payment_id,
                'razorpay_payment_id': razorpay_order_id,
                'razorpay_signature': razorpay_signature
                }
            verification = client.utility.verify_payment_signature(params_dict)
            trusted_order.isPaid = True
            trusted_order.save()
        else:
            verification = False
        return Response(verification)