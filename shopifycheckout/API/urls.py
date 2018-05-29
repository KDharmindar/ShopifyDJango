from django.urls import path
from rest_framework.authtoken import views
from API.views import *
from django.conf.urls import url

urlpatterns = [
    
    url(r'^login/', csrf_exempt(Login.as_view())),
    url(r'^createuser',UserManagement.as_view())
]