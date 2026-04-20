from django.shortcuts import render

from categories.models import Category

# Create your views here.

def index(request):
    categories = Category.objects.all()
    return render(request, "products/index.html", context ={"name":"Mohammed Ibrahim","products": products})
