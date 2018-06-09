from .models import ShopifyUrl
from rest_framework import serializers


class ShopifySerializer(serializers.ModelSerializer):
	class Meta:
		model = ShopifyUrl
		fields = ( 'id', 'url')
		