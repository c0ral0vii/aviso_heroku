from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.urls import reverse


class News(models.Model):
    title = models.CharField('Заголовок новости', max_length=150)
    # img = models.ImageField('Фотография новости', default='default.png')
    content = models.TextField('Текст новости')
    time_created = models.DateTimeField('Дата создания', auto_now_add=True)
    is_published = models.BooleanField('Публично ли', default=True)
    
    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Новости'
        verbose_name_plural = 'Новости'
        

class Articles(models.Model):
    title = models.CharField('Заголовок статьи', max_length=150)
    content = models.TextField('Текс статьи')
    time_created = models.DateTimeField('Дата создания', auto_now_add=True)
    is_published = models.BooleanField('Публично ли', default=True)
    
    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Статьи'
        verbose_name_plural = 'Статьи'
    

class Order(models.Model):
    title = models.CharField('Название заказа', max_length=150)
    content = models.TextField('Текс заказа')
    time_created = models.DateTimeField('Дата создания', auto_now_add=True)
    is_published = models.BooleanField('Публично ли', default=True)
    
    creator = models.OneToOneField(User, on_delete=models.SET_NULL, null=True, related_name='creator')
    worker = models.ManyToManyField(User, null=True, related_name='worker')
    
    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Заказы'
        verbose_name_plural = 'Заказы'

    