from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):

	user 				= models.OneToOneField(User,on_delete=models.CASCADE)
	phone_number 		= models.CharField(max_length=15,blank=True)
	profile_image 		= models.ImageField(upload_to='Profile', blank=True, null=True)

	# card_holder_name = models.CharField(max_length=100,blank=True)
	# cc_number = models.CharField(max_length=16,blank=True)
	# expiray_month = models.CharField(max_length=3,blank=True)
	# expiray_year = models.CharField(max_length=4,blank=True)
	# cvv_number = models.CharField(max_length=4,blank=True)
	# email = models.CharField(max_length=50,blank=True)
	# phone = models.CharField(max_length=20,blank=True)


class Checkout(models.Model):
	first_name 			= models.CharField(max_length=50, blank=True)
	last_name 			= models.CharField(max_length=50, blank=True)
	address1 			= models.TextField(max_length=500, blank=True)
	address2 			= models.TextField(max_length=500, blank=True)
	city 				= models.CharField(max_length=50, blank=True)
	state 				= models.CharField(max_length=50, blank=True)
	zipcode 			= models.CharField(max_length=20, blank=True)
	email 				= models.CharField(max_length=50, blank=True)
	phone 				= models.CharField(max_length=50, blank=True)
	card_num 			= models.CharField(max_length=16,blank=True)
	card_cvv 			= models.CharField(max_length=16,blank=True)
	# card_expired_month 	= models.CharField(max_length=4,blank=True)
	card_expired_date 	= models.CharField(max_length=200,blank=True)
	# paypal_use = models.CharField(max_length=2,blank=True)
	paypal_use 			= models.CharField(max_length=5,blank=True)
	paypal_email 		= models.CharField(max_length=50,blank=True)
	paypal_pw 			= models.CharField(max_length=50,blank=True)


class Task(models.Model):
	site 				= models.CharField(max_length=50, blank=True)
	type 				= models.CharField(max_length=50, blank=True)
	size 				= models.TextField(max_length=500, blank=True)
	billing_profile 	= models.TextField(max_length=500, blank=True)
	proxy 				= models.TextField(max_length=500, blank=True)
	checkout_type 		= models.CharField(max_length=50, blank=True)
	quantity 			= models.CharField(max_length=50, blank=True)

class gmail_account(models.Model):
	email 					= models.CharField(max_length=50, blank=True)
	password 				= models.CharField(max_length=50, blank=True)



