from django.contrib import admin
from django.urls import path 
from aboutUs.views import landing

urlpatterns = [
    path('land', landing,name="landing"),    
]