from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
<<<<<<< HEAD
    path('event/', views.getEvents, name="events"),
    path('event/<str:pk>', views.getEvent, name="event"),
=======
    path('event/', views.getEvent, name="event"),
>>>>>>> a102470ffa853b7a2ee7fe0209d3c4eafc18eca6
]