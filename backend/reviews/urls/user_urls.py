from django.urls import path
from reviews.views import user_views as views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.RegisterUser.as_view(), name="register"),
    path('profile/', views.getUserProfile, name="users-profile"),
    path('profile/update', views.UpdateUserProfile.as_view(), name="user-profile-update"),
    path('', views.GetUsers.as_view(), name="users"),
]