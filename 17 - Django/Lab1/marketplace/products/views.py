from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse 

products = [
            {"id":1, "name":"headphone","stock":"sondcore", "image":"https://cdn-icons-png.flaticon.com/128/9602/9602783.png" ,  "price":2000 , "description":"high quality wireless headphone"},
            {"id":2, "name":"laptop","stock":"dell", "image":"https://cdn-icons-png.flaticon.com/128/14122/14122442.png" ,  "price":50000 , "description":"high performance laptop"},
            {"id":3, "name":"mobile","stock":"samsung", "image":"https://cdn-icons-png.flaticon.com/128/186/186239.png" ,  "price":30000 , "description":"high quality mobile phone"},
            {"id":4, "name":"watch","stock":"apple", "image":"https://cdn-icons-png.flaticon.com/128/9413/9413719.png" ,  "price":40000 , "description":"high quality smart watch"},
        ]


def getProduct(request, id):
    print(id)
    product_found = filter(lambda product: product["id"] == int(id), products)
    product_found = list(product_found)
    if(len(product_found) > 0):
        return HttpResponse(f"<h1 style='color:green'>{product_found[0]['name']}</h1>")
    return HttpResponse("<h1 style='color:red'></h1>")


def landing(request):
    return render(request, "products/landing.html")

def index(request):
    return render(request, "products/index.html", context ={"name":"Mohammed Ibrahim","products": products})

def getProduct(request, id):
    print(id)
    product_found = filter(lambda product: product["id"] == int(id), products)
    product_found = list(product_found)
    if(len(product_found) > 0):
        return render(request, "products/details.html", context ={"product": product_found[0]})
    return HttpResponse("<h1 style='color:red'></h1>")
