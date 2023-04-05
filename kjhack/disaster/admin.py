from django.contrib import admin
from .models import Disaster,Volunteer,Donation,Report,Found, Order, Organization

admin.site.register(Disaster)
admin.site.register(Volunteer)
admin.site.register(Donation)
admin.site.register(Report)
admin.site.register(Found)
admin.site.register(Order)
admin.site.register(Organization)