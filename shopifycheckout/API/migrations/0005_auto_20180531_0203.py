# Generated by Django 2.0.5 on 2018-05-31 09:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0004_checkout'),
    ]

    operations = [
        migrations.RenameField(
            model_name='checkout',
            old_name='lastt_name',
            new_name='last_name',
        ),
    ]
