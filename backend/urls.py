from django.contrib import admin
from django.urls import path, re_path, include
from django.conf import settings
from .yasg import urlpatterns as doc_urls
from django.views.generic import TemplateView
from django.conf.urls.static import static

routes = getattr(settings, 'REACT_ROUTES', [])

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('rest_framework.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('social_auth/', include('djoser.social.urls')),
    path('', include('aviso_api.urls')),
    re_path(r'^(%s)?$' % '|'.join(routes), TemplateView.as_view(template_name='index.html')),
    # re_path(r'^.*$', TemplateView.as_view(template_name='index.html'))
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += doc_urls
