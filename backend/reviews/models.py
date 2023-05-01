from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Post(models.Model):
	id = models.CharField(primary_key=True, max_length=200)
	title = models.CharField(max_length=200)
	description = models.TextField(null=True, blank=True)
	category = models.CharField(max_length=50)
	category_en = models.CharField(max_length=50)
	main_image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100)
	location = models.CharField(max_length=100, null=True, blank=True)
	address = models.CharField(max_length=100, null=True, blank=True)
	map = models.URLField(max_length=200, null=True, blank=True)
	date = models.JSONField(default=list, null=True, blank=True)
	time = models.CharField(max_length=20, null=True, blank=True)
	price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
	phone = PhoneNumberField(null=True, blank=True)
	images = models.JSONField(default=list, null=True, blank=True)
	website = models.JSONField(default=list, null=True, blank=True)
	socials = models.JSONField(default=list, null=True, blank=True)
	hashtags = models.JSONField(default=list, null=True, blank=True)
	cover = models.URLField(max_length=200, null=True, blank=True)
	comments = models.JSONField(default=list, null=True, blank=True)
	publication_date = models.DateTimeField(auto_now_add=True)
	views = models.IntegerField(default=0)

	def __str__(self):
		return self.title
	