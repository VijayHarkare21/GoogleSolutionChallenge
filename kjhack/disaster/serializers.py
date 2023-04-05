from rest_framework import serializers

from .models import Disaster, Found, Volunteer, Donation, Report, Organization, Order, Payment

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fileds = '__all__'

class DisasterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disaster
        fields = '__all__'

class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = '__all__'

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = '__all__'

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'

class FoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Found
        fields = '__all__'

class OrderDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model=Order
        fields= '__all__'
        
class PaymentDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Payment
        fields = '__all__'