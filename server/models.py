import django.utils.timezone
from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    birth_date = models.DateField(blank=True, null=True)
    passport = models.CharField(blank=True, null=True, max_length=11, unique=True)
    patronymic = models.CharField(blank=True, null=True, max_length=50)
    phone = models.CharField(blank=True, null=True, max_length=14)

    def __str__(self):
        return self.username


class Link(models.Model):
    link = models.CharField(max_length=2048, null=False)
    name = models.CharField(max_length=20, null=False)
    color = models.CharField(max_length=7, default="#FFFFFF")
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)


class Tier(models.Model):
    A = models.CharField(max_length=500, null=True, blank=True)
    B = models.CharField(max_length=500, null=True, blank=True)
    C = models.CharField(max_length=500, null=True, blank=True)
    D = models.CharField(max_length=500, null=True, blank=True)
    archive = models.CharField(max_length=500, null=True, blank=True)


class Order(models.Model):
    car_id = models.CharField(max_length=3000)
    car_mark = models.CharField(max_length=3000)
    car_name = models.CharField(max_length=3000)
    car_tag = models.CharField(max_length=3000)
    price = models.IntegerField()
    days_begin = models.CharField(max_length=3000)
    days_end = models.CharField(max_length=3000)
    fel_name = models.CharField(max_length=3000)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)
