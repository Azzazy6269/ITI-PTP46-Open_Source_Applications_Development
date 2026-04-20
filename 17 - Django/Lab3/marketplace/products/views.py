from django.shortcuts import get_object_or_404, redirect, render
from django.http import HttpResponse 
from django.views import View
from products.models import Product
from categories.models import Category
from products.forms import  ProductModelForm


def landing(request):
    return render(request, "products/landing.html")

def index(request):
    categories = Category.objects.all()
    category_id = request.GET.get('category', '')
    if category_id:
        products = Product.objects.filter(category_id=category_id)
    else:
        products = Product.objects.all()
    return render(request, "products/index.html", context={
        "name": "Mohammed Ibrahim",
        "products": products,
        "categories": categories,
        "selected_category": category_id
    })

def getProduct(request, id):
    product = Product.objects.get(id=id)
    if(product):
        return render(request, "products/details.html", context ={"product": product})
    return HttpResponse("<h1 style='color:red'></h1>")

def create(request):
    if request.method == "POST":
        name = request.POST.get("name")
        description = request.POST.get("description")
        stock = request.POST.get("stock")
        price = request.POST.get("price")
        image = request.FILES.get("image")
        category_id = request.POST.get("category")
        product = Product(name=name, description=description, stock=stock, price=price, image=image, category_id=category_id)
        product.save()
        return redirect("products.index")

    categories = Category.objects.all()
    return render(request, "products/create.html", context={"message": "Product created successfully!", "categories": categories})



def delete(request, id):
    product = get_object_or_404(Product, id=id)
    product.delete()
    return redirect("products.index")




def edit(request, id):
    product = get_object_or_404(Product, id=id)    
    if request.method == "POST":  
        product.name = request.POST.get("name")
        product.description = request.POST.get("description")
        product.stock = request.POST.get("stock")
        product.price = request.POST.get("price")
        image = request.FILES.get("image")
        if image:
            product.image = image
        product.category_id = request.POST.get("category")
        product.save()
        return redirect("products.index") 
    
    categories = Category.objects.all()
    return render(request, "products/edit.html", context={"product": product, "categories": categories})  



#def createViaForm(request):
#    form = ProductForm()
#    if request.method == "POST":
#        form = ProductForm(request.POST, request.FILES)
#        if form.is_valid():
#            name = form.cleaned_data["name"]
#            description = form.cleaned_data["description"]
#            stock = form.cleaned_data["stock"]
#            price = form.cleaned_data["price"]
#            image = form.cleaned_data["image"]
#            category_id = form.cleaned_data["category"]
#            product = Product(name=name, description=description, stock=stock, price=price, image=image, category_id=category_id)
#            product.save()
#            return redirect("products.index")
#    else:
#        form = ProductForm()
#        categories = Category.objects.all()
#        form.fields['category'].choices = [(category.id, category.name) for category in categories]
#    
#    return render(request, "products/create_via_form.html", context={"form": form})


def create_via_form(request):
    form  = ProductModelForm()
    if request.method == "POST":
        print(request.POST)
        # I need to use the form to validate input
        form  = ProductModelForm(request.POST,request.FILES)
        if form.is_valid():
            product = form.save()
            return redirect(product.show_url)

    return render(request, "products/createViaForm.html", {"form": form})