# Generated by Django 4.1.2 on 2023-02-26 22:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('aviso_api', '0005_alter_articles_img_alter_news_img_alter_profile_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='worker',
        ),
        migrations.AddField(
            model_name='profile',
            name='orders',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='order', to='aviso_api.order', verbose_name='Заказы'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=models.ImageField(blank=True, default='avatar_default.png', null=True, upload_to='', verbose_name='Фотография профиля'),
        ),
    ]
