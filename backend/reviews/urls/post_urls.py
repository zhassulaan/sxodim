from django.urls import path
from reviews.views import post_views as views

urlpatterns = [
    path('', views.getPosts, name="posts"),
    path('<str:pk>/', views.getPost, name="post"),
]
