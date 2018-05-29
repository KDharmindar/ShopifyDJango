from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):

	user = models.OneToOneField(User,on_delete=models.CASCADE) 
	phone_number = models.CharField(max_length=15,blank=True)
	profile_image = models.ImageField(upload_to='Profile', blank=True, null=True)

	# card_holder_name = models.CharField(max_length=100,blank=True)
	# cc_number = models.CharField(max_length=16,blank=True)
	# expiray_month = models.CharField(max_length=3,blank=True)
	# expiray_year = models.CharField(max_length=4,blank=True)
	# cvv_number = models.CharField(max_length=4,blank=True)
	# email = models.CharField(max_length=50,blank=True)
	# phone = models.CharField(max_length=20,blank=True)



# class Address(models.Model):

# 	userprofile = models.ForeignKey(Profile, on_delete=models.CASCADE)
# 	ADDRESS_CHOICES = (
# 	    (1, ("Delivery Address")),
# 	    (2, ("Billing  Address")),
	    
# 	)
# 	address_type = models.IntegerField(choices=ADDRESS_CHOICES, default=1)
# 	firstname = models.CharField(max_length=50, blank=True)
# 	lasttname = models.CharField(max_length=50, blank=True)  
# 	address1 = models.TextField(max_length=500, blank=True)
# 	address2 = models.TextField(max_length=500, blank=True)
# 	city = models.CharField(max_length=50, blank=True)
# 	state = models.CharField(max_length=50, blank=True)
# 	zipcode = models.CharField(max_length=20, blank=True)
# 	country = models.CharField(max_length=50, blank=True)                  