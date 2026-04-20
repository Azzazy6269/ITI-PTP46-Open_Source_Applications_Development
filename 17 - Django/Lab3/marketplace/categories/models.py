from django.db import models
from django.shortcuts import reverse
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to="categories/logos", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


    @property
    def logo_url(self):
        return f'/media/{self.logo}'


   