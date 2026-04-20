from rest_framework import serializers
from categories.api.serialize import CategorySerializer
from categories.models import Category
from products.models import Product

class ProductSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100,min_length=2)
    price = serializers.FloatField(min_value=0)
    description = serializers.CharField(max_length=500)
    stock = serializers.IntegerField(min_value=1)
    image = serializers.ImageField(required=False)
    category = CategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)

    def validate_category_id(self, value):
        if Category.objects.filter(id=value).exists():
            return value
        else:
            raise serializers.ValidationError()

    def create(self, validated_data):
        product = Product.objects.create(**validated_data)
        return product
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.price = validated_data.get('price', instance.price)
        instance.description = validated_data.get('description', instance.description)
        instance.stock = validated_data.get('stock', instance.stock)
        instance.image = validated_data.get('image', instance.image)
        category_id = validated_data.get('category_id')
        if category_id:
            category = Category.objects.get(id=category_id)
            instance.category = category
        instance.save()
        return instance
    
    def delete(self, instance):
        instance.delete()




