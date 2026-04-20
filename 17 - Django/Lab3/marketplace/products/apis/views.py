from django.shortcuts import get_object_or_404

from products.models import Product
from django.http import HttpResponse, JsonResponse
from products.apis.serialize import ProductSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def index(request):
    if request.method == 'GET':
        products = Product.objects.all()
        products = ProductSerializer(products, many=True).data
        return Response(products)
    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"product":serializer.data,"message":"Product created successfully"}, status=201)
        return Response({"errors":serializer.errors,"message":"failed to create product"}, status=400)


@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def details(request, id):
    product = get_object_or_404(Product, id=id)

    if request.method == 'GET':
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    elif request.method in ['PUT', 'PATCH']:
        serializer = ProductSerializer(product, data=request.data, partial=request.method == 'PATCH')
        if serializer.is_valid():
            serializer.save()
            return Response({"product": serializer.data, "message": "Product updated successfully"})
        return Response({"errors": serializer.errors, "message": "Validation failed"}, status=400)

    elif request.method == 'DELETE':
        product.delete()
        return Response({"message": "Product deleted successfully"}, status=204)