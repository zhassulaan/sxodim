from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Event
from .events import events
from .serializers import EventSerializer, UserSerializer, UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
	def validate(self, attrs):
		data = super().validate(attrs)

		serializer = UserSerializerWithToken(self.user).data

		for k, v in serializer.items():
			data[k] = v

		return data

class MyTokenObtainPairView(TokenObtainPairView):
	serializer_class = MyTokenObtainPairSerializer

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
@permission_classes([IsAuthenticated])
def getUserProfile(request):
	user = request.user
	serializer = UserSerializer(user, many=False)
	return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
	users = User.objects.all()
	serializer = UserSerializer(users, many=True)
	return Response(serializer.data)

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
