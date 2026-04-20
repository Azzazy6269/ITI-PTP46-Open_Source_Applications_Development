from django import forms

from categories.models import Category
from products.models import Product




class ProductModelForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'description', 'stock', 'price', 'image', 'category']


    def clean_price(self):
        price = self.cleaned_data['price']
        if price <= 0:
            raise forms.ValidationError("Price must be greater than zero.")
        return price

    def clean_stock(self):
        stock = self.cleaned_data['stock']
        if stock < 0:
            raise forms.ValidationError("Stock cannot be negative.")
        return stock

    def clean_name(self):
        name = self.cleaned_data['name']
        if len(name) < 2:
            raise forms.ValidationError("Name must be at least 2 characters long.")
        return name

    def clean_image(self):
        allowed_types = ['image/jpeg', 'image/png', 'image/gif']
        image = self.cleaned_data['image']
        if image.content_type not in allowed_types:
            raise forms.ValidationError("Invalid image type. Please upload a JPEG, PNG, or GIF image.")
        return image

