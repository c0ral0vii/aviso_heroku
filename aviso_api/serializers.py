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


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class ProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('avatar', 'bio', 'orders')
        extra_kwargs = {
            'orders': {
                'required': False,
            },
        }

    def update(self, instance, validated_data):
        instance.avatar = validated_data.get('avatar', instance.avatar)
        instance.bio = validated_data.get('bio', instance.bio)
        if validated_data.get('orders'):
            instance.orders.set(validated_data.get('orders'))
        instance.save()

        return instance


class NewsUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.img = validated_data.get('img', instance.img)
        instance.content = validated_data.get('content', instance.content)
        instance.is_published = validated_data.get('is_published', instance.is_published)

        instance.save()

        return instance


class OrderUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.img = validated_data.get('img', instance.img)
        instance.content = validated_data.get('content', instance.content)
        instance.is_published = validated_data.get('is_published', instance.is_published)

        instance.save()

        return instance