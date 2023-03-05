from django.urls import path

from .views import *


urlpatterns = [
    path('api/articles/', get_articles),
    path('api/articles/<int:pk>/', get_one_article),

    path('api/news/', get_news),
    path('api/news/<int:pk>/', get_one_news),

    path('api/orders/', get_orders),
    path('api/orders/<int:pk>/', order),
    path('api/orders/change/<int:pk>/', change_order),

    path('api/profile/', get_profile_data),
    path('api/profile/update/<str:user>/', profile_data),
]