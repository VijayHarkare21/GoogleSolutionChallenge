from django.urls import path
from . import views

urlpatterns = [
    path('disaster-list', views.disaster_list, name = 'disaster-list'),
    path('organization', views.org, name = 'organization'),
    path('volunteer', views.VolunteerAPI.as_view() , name = 'volunteer'),
    path('donate', views.DonationAPI.as_view() , name = 'donate'),
    path('handle-status', views.handlepayment, name = 'handle-status'),
    path('report', views.ReportAPI.as_view() , name = 'report'),
    path('found', views.found, name = 'found'),
    path('found-person', views.SearchAPI.as_view() , name = 'found-person'),
    path('order/',views.RazorPayOrder.as_view(), name = 'order'),
    path('checkout_verification/',views.PaymentDetailsView.as_view(),name='checkout_verification'),
]