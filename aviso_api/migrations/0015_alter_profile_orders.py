# Generated by Django 4.1.2 on 2023-03-04 23:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aviso_api', '0014_alter_profile_orders'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='orders',
            field=models.ManyToManyField(null=True, related_name='order', to='aviso_api.order', verbose_name='Заказы'),
        ),
    ]