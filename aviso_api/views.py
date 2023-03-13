from django.shortcuts import render, get_object_or_404, reverse, HttpResponseRedirect, redirect
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from rest_framework import viewsets, permissions, generics
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from social_core.backends.google import GoogleOAuth2
from social_core.backends.vk import VKOAuth2
from django.contrib.auth import authenticate, login, logout
from .serializers import *
from .models import *


def login_signup(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(username=email, password=password)
        if user:
            login(request, user)
            return HttpResponseRedirect(reverse('/'))
        else:
            createUser = User(username=email)
            createUser.set_password(password)
            createUser.save()
            user = authenticate(username=email, password=password)
            login(request, user)
            return HttpResponseRedirect(reverse('/'))

    return HttpResponseRedirect(reverse('login'))

def redirect_tog(request):
    return redirect('social:begin', 'google-oauth2')

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
    id = kwargs.get('id', None)

    try:
        article = Articles.objects.get(id=id)
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
    id = kwargs.get('id', None)

    try:
        order = Order.objects.get(id=id)
    except:
        return Response({'status': 'Dont have this order!'}, status=400)

    serializer = NewsSerializer(order)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def change_order(request, **kwargs):
    id = kwargs.get('id', None)

    try:
        instance = Order.objects.get(id=id)
    except:
        return Response({'status': 'error'}, status=400)

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

    serializer = ProfileUpdateSerializer(data=request.data, files=request.FILES, instance=instance)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_order(request):
    serializer = OrdersSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    return Response(serializer.errors, status=400)







