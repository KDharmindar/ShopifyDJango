import os
import django
import sys
sys.path.append(os.path.dirname(os.path.abspath('.')))

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "shopifycheckout.settings")
django.setup()
from API.models import Profile


def get_profile():
    pass
    return Profile


def set_profile(profile):
    pass
    return profile