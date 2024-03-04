from django.urls import path
from reviews.views.post_views import PostListAPIView, PostDetailAPIView, SearchPostAPIView

urlpatterns = [
    path('', PostListAPIView.as_view(), name='posts'),
    path('<str:pk>/', PostDetailAPIView.as_view(), name='post'),
	path('search/', SearchPostAPIView.as_view(), name='post_search'),
]
