from .models import ShopifyUrl
from .models import *
from rest_framework import serializers


class ShopifySerializer(serializers.ModelSerializer):
	class Meta:
		model = ShopifyUrl
		fields = ( 'id', 'url')

class ProxySerializer(serializers.ModelSerializer):
	class Meta:
		model = Proxies
		fields = ('id', 'ip', 'port')

class GmailAccountSerializer(serializers.ModelSerializer):
	class Meta:
		model = GmailAccount
		fields = ('id', 'email', 'password')

class TaskSerializer(serializers.ModelSerializer):
	class Meta:
		model = Task
		fields = ('id', 'site', 'type', 'size', 'billing_profile','proxy','checkout_type','quantity')

class CheckoutSerializer(serializers.ModelSerializer):
	class Meta:
		model = Checkout
		fields = ('id', 'first_name', 'last_name', 'address1', 'address2','city','state','zipcode','email','phone','card_num','card_cvv','card_expired_date','paypal_use','paypal_email','paypal_pw')
