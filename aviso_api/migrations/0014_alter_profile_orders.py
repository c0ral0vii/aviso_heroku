# Generated by Django 4.1.2 on 2023-03-04 22:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aviso_api', '0013_remove_profile_orders_profile_orders'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='orders',
            field=models.ManyToManyField(related_name='order', to='aviso_api.order', verbose_name='Заказы'),
        ),
    ]
