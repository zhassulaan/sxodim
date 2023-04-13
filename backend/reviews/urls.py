from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('event/', views.getEvents, name="events"),
    path('event/<str:pk>', views.getEvent, name="event"),
]