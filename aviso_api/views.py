from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from rest_framework import viewsets, permissions, generics
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from .serializers import *
from .models import *


@api_view(['GET'])
def get_news(request):
    news = News.objects.all()
    serializer = NewsSerializer(news, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_one_news(request, **kwargs):
    pk = kwargs.get('pk', None)
    try:
        news = News.objects.get(pk=pk)
    except:
        return Response({'status': 'Dont have this news!'}, status=400)
    serializer = NewsSerializer(news)
    return Response(serializer.data)


@api_view(['GET'])
def get_articles(request):
    articles = Articles.objects.all()
    serializer = ArticlesSerializer(articles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_one_article(request, **kwargs):
    pk = kwargs.get('pk', None)

    try:
        article = Articles.objects.get(pk=pk)
    except:
        return Response({'status': 'Dont have this article!'}, status=400)

    serializer = NewsSerializer(article)
    return Response(serializer.data)


@api_view(['GET'])
def get_orders(request):
    orders = Order.objects.all()
    serializer = OrdersSerializer(orders, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def order(request, **kwargs):
    pk = kwargs.get('pk', None)

    try:
        order = Order.objects.get(pk=pk)
    except:
        return Response({'status': 'Dont have this order!'}, status=400)

    serializer = NewsSerializer(order)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def change_order(request, **kwargs):
    pk = kwargs.get('pk', None)
    try:
        instance = Order.objects.get(pk=pk)
    except:
        return Response({'status': 'Error!'}, status=400)

    serializer = OrderUpdateSerializer(data=request.data, instance=instance)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def get_profile_data(request):
    profile = Profile.objects.all()
    serializer = ProfileSerializer(profile, many=True)
    return Response(serializer.data)


@api_view(['PUT', 'GET'])
@permission_classes([IsAuthenticated])
def profile_data(request, **kwargs):
    username = kwargs.get('user', None)

    try:
        instance = Profile.objects.get(user__username=username)
    except:
        return Response({'status': 'Ошибка. Свяжитесь со службой поддержки'}, status=400)

    serializer = ProfileUpdateSerializer(data=request.data, instance=instance)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_order(request):
    serializer = OrderCreateSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    return Response(serializer.errors, status=400)




