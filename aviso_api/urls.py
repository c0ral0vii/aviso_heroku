from django.urls import path
from django.views.generic import TemplateView

from .views import *


urlpatterns = [
    path('api/articles/', get_articles),
    path('api/articles/<int:id>/', get_one_article),

    path('api/news/', get_news),
    path('api/news/<int:id>/', get_one_news),

    path('api/orders/', get_orders),
    path('api/orders/create/', create_order),
    path('api/orders/<int:id>/', order),
    path('api/orders/change/<int:id>/', change_order),

    path('api/profile/', get_profile_data),
    path('api/profile/update/<str:user>/', profile_data),
]