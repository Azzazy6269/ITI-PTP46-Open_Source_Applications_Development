from django.urls import path 
from products.apis.views import index , details
urlpatterns = [
    path('index', index,name="product.api.index"),
    path('<int:id>', details, name="product.api.details"),
]

