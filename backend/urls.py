from django.contrib import admin
from django.urls import path, re_path, include
from .yasg import urlpatterns as doc_urls
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('rest_framework.urls')),
    path('auth/', include('djoser.urls')),
    path('social_auth/', include('djoser.social.urls')),
    path('', include('aviso_api.urls')),
    re_path('social_auth/', include('drf_social_oauth2.urls', namespace='drf')),
    re_path('auth/', include('djoser.urls.authtoken')),
    path('', TemplateView.as_view(template_name='index.html')),
]

urlpatterns += doc_urls
