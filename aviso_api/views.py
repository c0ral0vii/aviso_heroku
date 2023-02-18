from django.shortcuts import render
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import *
from .models import *


@api_view(['GET'])
def get_news(request):
    news = News.objects.all()
    serializer = NewsSerializer(news, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_articles(request):
    articles = Articles.objects.all()
    serializer = ArticlesSerializer(articles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_orders(request):
    orders = Order.objects.all()
    serializer = OrdersSerializer(orders, many=True)
    return Response(serializer.data)