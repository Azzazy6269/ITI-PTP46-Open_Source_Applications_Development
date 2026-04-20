from django.contrib import admin
from django.urls import path 
from products.views import create, create_via_form, edit,delete, getProduct,landing,index

urlpatterns = [
    path('<int:id>', getProduct,name="product"),
    path('land', landing,name="landing"),
    path('index', index,name="products.index"),
    path('create', create,name="products.create"),
    path('delete/<int:id>', delete,name="products.delete"),
    path('edit/<int:id>', edit,name="products.edit"),
    path('create_via_form', create_via_form,name="products.create_via_form"),

]