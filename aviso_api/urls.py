from django.urls import path

from .views import *


urlpatterns = [
    path('api/articles/', get_articles),
    path('api/news/', get_news),
    path('api/orders/', get_orders),
]