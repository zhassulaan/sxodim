from django.shortcuts import render
from django.http import JsonResponse
<<<<<<< HEAD
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .events import events

@api_view(['GET'])
=======
from .event import event
# from .models import Impression

>>>>>>> a102470ffa853b7a2ee7fe0209d3c4eafc18eca6
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
<<<<<<< HEAD
	return Response(routes)

@api_view(['GET'])
def getEvents(request):
	return Response(events)

@api_view(['GET'])
def getEvent(request, pk):
	event = None
	for i in events:
		if i['id'] == pk:
			event = i
			break
	return Response(event)
=======
	return JsonResponse(routes, safe=False)

def getEvent(request):
	return JsonResponse(event, safe=False)
>>>>>>> a102470ffa853b7a2ee7fe0209d3c4eafc18eca6
