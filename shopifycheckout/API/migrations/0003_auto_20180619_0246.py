# Generated by Django 2.0.6 on 2018-06-18 21:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0002_auto_20180619_0202'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='checkout',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, related_name='checkouts', to='API.Checkout'),
        ),
        migrations.AlterField(
            model_name='task',
            name='proxy',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, related_name='proxies', to='API.Proxies'),
        ),
        migrations.AlterField(
            model_name='task',
            name='site',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, related_name='sites', to='API.ShopifyUrl'),
        ),
    ]
