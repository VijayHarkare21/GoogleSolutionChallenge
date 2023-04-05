from django.urls import path
from . import views

urlpatterns = [
    path('model/', views.call_model.as_view()),
    path('predict/', views.ML.as_view()),
]