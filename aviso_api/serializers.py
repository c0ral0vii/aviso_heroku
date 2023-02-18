from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from .models import *

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'
        

class ArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = '__all__'


class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'