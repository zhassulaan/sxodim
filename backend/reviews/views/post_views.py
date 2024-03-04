from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_GET
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from reviews.models import Post
from reviews.posts import posts
from reviews.serializers import PostSerializer
from rest_framework import status

class PostListAPIView(APIView):
	def get(self, request):
		posts = Post.objects.all()
		serializer = PostSerializer(posts, many=True)
		return Response(serializer.data)

	def post(self, request):
		serializer = PostSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PostDetailAPIView(APIView):
	def get_object(self, pk):
		try:
			return Post.objects.get(id=pk)
		except Post.DoesNotExist:
			return Response(status=status.HTTP_404_NOT_FOUND)

	def get(self, request, pk):
		post = self.get_object(pk)
		serializer = PostSerializer(post)
		# add the viewed post to session
		viewed_posts = request.session.get('viewed_posts', [])
		if pk not in viewed_posts:
			viewed_posts.append(pk)
			request.session['viewed_posts'] = viewed_posts[-5:] # keep only the last 5 posts viewed
			request.session.modified = True
		return Response(serializer.data)

	def put(self, request, pk):
		post = self.get_object(pk)
		serializer = PostSerializer(post, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, pk):
		post = self.get_object(pk)
		post.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)
    
class SearchPostAPIView(APIView):
	def get(self, request):
		query = request.GET.get('q', '')
		if query:
			results = Post.objects.filter(title__icontains=query)
			data = [{'title': post.title, 'content': post} for post in results]
		else:
			data = []
		return JsonResponse({'results': data})
