from rest_framework import serializers
from .models import Link, Tier
from django.contrib.auth.models import User


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ['name', 'link', 'color', 'id', 'user']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'id']


class TierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tier
        fields = ['A', 'B', 'C', 'D', 'archive']
