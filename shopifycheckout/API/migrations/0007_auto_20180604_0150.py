# Generated by Django 2.0.5 on 2018-06-04 08:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0006_auto_20180602_2311'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='checkout',
            name='card_expired_month',
        ),
        migrations.RemoveField(
            model_name='checkout',
            name='card_expired_year',
        ),
        migrations.AddField(
            model_name='checkout',
            name='card_expired_date',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]