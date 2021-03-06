# Generated by Django 2.0.6 on 2018-06-18 12:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Checkout',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=50)),
                ('last_name', models.CharField(blank=True, max_length=50)),
                ('address1', models.TextField(blank=True, max_length=500)),
                ('address2', models.TextField(blank=True, max_length=500)),
                ('city', models.CharField(blank=True, max_length=50)),
                ('state', models.CharField(blank=True, max_length=50)),
                ('zipcode', models.CharField(blank=True, max_length=20)),
                ('email', models.CharField(blank=True, max_length=50)),
                ('phone', models.CharField(blank=True, max_length=50)),
                ('card_num', models.CharField(blank=True, max_length=16)),
                ('card_cvv', models.CharField(blank=True, max_length=16)),
                ('card_expired_date', models.CharField(blank=True, max_length=200)),
                ('paypal_use', models.CharField(blank=True, max_length=5)),
                ('paypal_email', models.CharField(blank=True, max_length=50)),
                ('paypal_pw', models.CharField(blank=True, max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='GmailAccount',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(blank=True, max_length=50)),
                ('password', models.CharField(blank=True, max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone_number', models.CharField(blank=True, max_length=15)),
                ('profile_image', models.ImageField(blank=True, null=True, upload_to='Profile')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Proxies',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip', models.CharField(blank=True, max_length=50)),
                ('port', models.CharField(blank=True, max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='ShopifyUrl',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(blank=True, max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('size', models.TextField(blank=True, max_length=500)),
                ('product', models.TextField(blank=True, max_length=500)),
                ('start_time', models.CharField(blank=True, max_length=50)),
                ('quantity', models.CharField(blank=True, max_length=50)),
                ('completed_date', models.DateTimeField(blank=True, null=True)),
                ('keyword', models.CharField(blank=True, max_length=50)),
                ('checkout_type', models.CharField(blank=True, max_length=50)),
                ('status', models.CharField(choices=[('Queued', 'Queued'), ('Running', 'Running'), ('ReSearching', 'ReSearching'), ('NotResult', 'NotResult'), ('Not Available', 'Not Available'), ('Checkouting', 'Checkouting'), ('Pin Required', 'Pin Required'), ('Pin Checking', 'Pin Checking'), ('Pin Invalid', 'Pin Invalid'), ('Captcha solving', 'Captcha solving'), ('Error', 'Error'), ('Done', 'Done')], default='Queued', max_length=20)),
                ('action', models.CharField(blank=True, max_length=20)),
                ('checkout', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='task', to='API.Checkout')),
                ('proxy', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='proxy', to='API.Proxies')),
                ('site', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='site', to='API.ShopifyUrl')),
            ],
        ),
    ]
