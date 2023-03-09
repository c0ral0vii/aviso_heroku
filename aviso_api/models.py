from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.urls import reverse


class News(models.Model):
    title = models.CharField('Заголовок новости', max_length=150)
    img = models.ImageField('Фотография новости', default='news/default.jpg', null=True, blank=True, upload_to='news/')
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
    preview = models.TextField('Превью')
    img = models.ImageField('Фотография статьи', default='articles/default.jpg', null=True, blank=True, upload_to='articles/')
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
    img = models.ImageField('Фотография заказа', default='orders/default.jpg', null=True, blank=True, upload_to='orders/')
    content = models.TextField('Текс заказа')
    time_created = models.DateTimeField('Дата создания', auto_now_add=True)
    is_published = models.BooleanField('Публично ли', default=True)
    
    creator = models.ForeignKey(User, verbose_name='Создатель', on_delete=models.SET_NULL, null=True, related_name='creator')

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Заказы'
        verbose_name_plural = 'Заказы'


class Profile(models.Model):
    user = models.OneToOneField(User, verbose_name='Имя пользователя', on_delete=models.CASCADE)
    orders = models.ManyToManyField(Order, verbose_name='Заказы', related_name='order')
    avatar = models.ImageField('Фотография профиля', default='profiles/avatar_default.jpg', null=True, blank=True, upload_to='profiles/')
    bio = models.CharField('Описание', max_length=1000, default='Пусто')

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(
                user=instance
            )

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = 'Профиль пользователя'
        verbose_name_plural = 'Профиль пользователя'
