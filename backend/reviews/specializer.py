# from rest_framework import serializers
# from rest_framework.authtoken.models import Token
# from .models import (
#     Impression,
# )
# from .utils import get_gravatar

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Impression
#         fields = ['id','name','email','avatar','date','password']
#         extra_kwargs = {'password': {'write_only': True, 'required': True}}

#     def create(self, validated_data):
#         user = Impression.objects.create_user(**validated_data)
#         user.avatar = get_gravatar(validated_data.get('email'))
#         user.save()
#         Token.objects.create(user=user)
#         return user