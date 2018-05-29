# Generated by Django 2.0.5 on 2018-05-29 18:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0003_auto_20180528_1941'),
    ]

    operations = [
        migrations.CreateModel(
            name='Checkout',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=50)),
                ('lastt_name', models.CharField(blank=True, max_length=50)),
                ('address1', models.TextField(blank=True, max_length=500)),
                ('address2', models.TextField(blank=True, max_length=500)),
                ('city', models.CharField(blank=True, max_length=50)),
                ('state', models.CharField(blank=True, max_length=50)),
                ('zipcode', models.CharField(blank=True, max_length=20)),
                ('email', models.CharField(blank=True, max_length=50)),
                ('phone', models.CharField(blank=True, max_length=50)),
                ('card_num', models.CharField(blank=True, max_length=16)),
                ('card_cvv', models.CharField(blank=True, max_length=16)),
                ('card_expired_month', models.CharField(blank=True, max_length=4)),
                ('card_expired_year', models.CharField(blank=True, max_length=4)),
                ('paypal_use', models.CharField(blank=True, max_length=2)),
                ('paypal_email', models.CharField(blank=True, max_length=50)),
                ('paypal_pw', models.CharField(blank=True, max_length=50)),
            ],
        ),
    ]
