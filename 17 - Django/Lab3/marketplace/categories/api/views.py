from categories.models import Category
from api.serialize import CategorySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def index(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        categories = CategorySerializer(categories, many=True).data
        return Response(categories)
    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
