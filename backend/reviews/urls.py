from django.urls import path
from . import views

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRoutes, name="routes"),
    path('users/', views.getUsers, name="user-profile"),
    path('users/profile/', views.getUserProfile, name="user-profile"),
    path('event/', views.getEvents, name="events"),
    path('event/<str:pk>', views.getEvent, name="event"),
]