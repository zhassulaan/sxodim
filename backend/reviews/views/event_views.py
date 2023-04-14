from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from reviews.models import Event
from reviews.events import events
from reviews.serializers import EventSerializer
from rest_framework import status

@api_view(['GET'])
def getEvents(request):
	events = Event.objects.all()
	serializer = EventSerializer(events, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def getEvent(request, pk):
	event = Event.objects.get(id=pk)
	serializer = EventSerializer(event, many=False)
	return Response(serializer.data)
