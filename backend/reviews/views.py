from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .events import events

@api_view(['GET'])
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
