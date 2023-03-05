from django.contrib import admin
from django.contrib.auth.admin import UserAdmin, GroupAdmin
from django.contrib.auth.models import User, Group
from .models import *


admin.site.unregister(User)
admin.site.unregister(Group)


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


class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'avatar')
    filter_horizontal = ('orders',)


admin.site.register(Profile, ProfileAdmin)


class CustomUserAdmin(UserAdmin):
    filter_horizontal = ('user_permissions', 'groups')
    save_on_top = True
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'last_login')


admin.site.register(User, CustomUserAdmin)


class CustomGroupAdmin(GroupAdmin):
    list_display = ('id', 'name')
    save_on_top = True


admin.site.register(Group, CustomGroupAdmin)