from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.contrib.auth.models import User
from reviews.serializers import UserSerializer, UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework.views import APIView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
	def validate(self, attrs):
		data = super().validate(attrs)
		serializer = UserSerializerWithToken(self.user).data
		for k, v in serializer.items():
			data[k] = v
		return data


class MyTokenObtainPairView(TokenObtainPairView):
	serializer_class = MyTokenObtainPairSerializer


class Routes(APIView):
	def get(self, request):
		routes = [
			'api/post/',
			'api/post/create/',
			'api/post/upload/',
			'api/post/<id>/',
			'api/post/<id>/reviews/',
			'api/post/delete/<id>/',
			'api/post/update/<id>/',
		]
		return Response(routes)


class RegisterUser(APIView):
	def post(self, request):
		data = request.data

		try:
			user = User.objects.create(
				first_name=data['name'],
				last_name=data['surename'],
				username=data['email'],
				email=data['email'],
				password=make_password(data['password']),
			)
			serializer = UserSerializer(user, many=False)
			return Response(serializer.data)
		except:
			message = {'detail': 'User with this email already exists'}
			return Response(message, status=status.HTTP_400_BAD_REQUEST)


class UpdateUserProfile(APIView):
	permission_classes = [IsAuthenticated]

	def put(self, request):
		user = request.user
		serializer = UserSerializerWithToken(user, many=False)

		data = request.data

		user.id = data['id']
		user.first_name = data['name']
		# user.last_name = data['surename']
		user.username = data['username']
		# user.phone = data['phone']
		user.email = data['email']
		if data['password'] != '':
			user.password = make_password(data['password'])

		user.save()
		return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
	user = request.user
	serializer = UserSerializer(user, many=False)
	return Response(serializer.data)


class GetUsers(APIView):
	permission_classes = [IsAdminUser]

	def get(self, request):
		users = User.objects.all()
		serializer = UserSerializer(users, many=True)
		return Response(serializer.data)
	