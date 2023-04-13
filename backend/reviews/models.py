from django.db import models
from django.contrib.auth.models import User
# from django.contrib.postgres.fields import ArrayField
from phonenumber_field.modelfields import PhoneNumberField

class Event(models.Model):
	user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
	title = models.CharField(max_length=200, null=True, blank=True)
	_id = models.CharField(max_length=200, null=True, blank=True)
	description = models.TextField(null=True, blank=True)
	category = models.CharField(max_length=50, null=True, blank=True)
	# date = ArrayField(models.DateTimeField(auto_now_add=True, null=True), blank=True)
	time = models.CharField(max_length=20, null=True, blank=True)
	location = models.CharField(max_length=100, null=True, blank=True)
	address = models.CharField(max_length=100, null=True, blank=True)
	price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
	image = models.URLField(max_length=200, db_index=True, unique=True, blank=True)
	phone = PhoneNumberField(null=False, blank=False, )
	# website = ArrayField(models.URLField(max_length=200, db_index=True, unique=True, blank=True))
	views = models.IntegerField(null=True, blank=True, default=0)
	# hashtags = ArrayField(models.CharField(max_length=50, null=True, blank=True), blank=True)
	# comments = ArrayField(ArrayField(models.CharField(max_length=200, null=True, blank=True), size=3), blank=True)
	publication_date = models.DateTimeField(auto_now_add=True, null=True)

	def __str__(self):
		return self.title
	