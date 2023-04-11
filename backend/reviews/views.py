from django.shortcuts import render
from django.http import JsonResponse
from .event import event
# from .models import Impression

def getRoutes(request):
	routes = [
		'api/event/',
		'api/event/create/',
		'api/event/upload/',
		'api/event/<id>/',
		'api/event/<id>/reviews/',
		'api/event/delete/<id>/',
		'api/event/update/<id>/',
	]
	return JsonResponse(routes, safe=False)

def getEvent(request):
	return JsonResponse(event, safe=False)
