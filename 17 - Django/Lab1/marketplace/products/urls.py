from django.contrib import admin
from django.urls import path 
from products.views import getProduct,landing,index

urlpatterns = [
    path('<int:id>', getProduct,name="product"),
    path('land', landing,name="landing"),
    path('index', index,name="products.index")
    
]