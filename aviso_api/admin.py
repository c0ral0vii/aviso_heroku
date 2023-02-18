from django.contrib import admin
from .models import *


class ArticlesAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'time_created', 'is_published')
    list_filter = ('is_published', )

admin.site.register(Articles, ArticlesAdmin)


class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'time_created', 'is_published')
    list_filter = ('is_published',)
    
admin.site.register(News, NewsAdmin)

    
class OrderAdmin(admin.ModelAdmin):
    list_display = ('creator', 'title', 'content', 'time_created', 'is_published')
    list_filter = ('is_published',)
    
admin.site.register(Order, OrderAdmin)




