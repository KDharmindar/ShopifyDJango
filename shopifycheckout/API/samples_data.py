import sys
import random
from datetime import date, timedelta

from django.core.management.base import BaseCommand
from django.db.models.base import ObjectDoesNotExist
from django.contrib.auth.models import User

from core.models import UserSettings

from .models import Task


class Command(BaseCommand):
    def handle(self, *args, **options):
        try:
            Task.objects.create(site='Irvin', type='Beef - Tenderlion, Cneter Cut', size=8,billing_profile='Home Ing', proxy='216.7.247.41', status='Card declined', action=null )
        except:
            print('Error occured')
