from rest_framework import serializers
from .models import Link, Tier, Order, User


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ['name', 'link', 'color', 'id', 'user']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'id', 'first_name', 'last_name', 'passport', 'patronymic',
                  'birth_date', 'phone']


class TierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tier
        fields = ['A', 'B', 'C', 'D', 'archive']


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['car_id', 'car_mark', 'car_name', 'car_tag', 'days_begin', 'days_end', 'fel_name', 'user', 'price']
