from django.urls import path
from rest_framework.authtoken import views
from API.views import *
from django.conf.urls import url

urlpatterns = [
    url(r'^login/', csrf_exempt(Login.as_view())),
    url(r'^createuser',UserManagement.as_view()),
    url(r'^billings',Profilecheckout.as_view()),
    url(r'^createtask',Createtask.as_view()),
    url(r'^savegmail',Savegmail.as_view()),
    url(r'^proxies',Proxies.as_view()),
    url(r'^shopify-url',ShopifyURL.as_view()),

]