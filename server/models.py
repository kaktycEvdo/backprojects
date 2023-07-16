from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Link(models.Model):
    link = models.CharField(max_length=2048, null=False)
    name = models.CharField(max_length=20, null=False)
    color = models.CharField(max_length=7, default="#FFFFFF")
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, null=False)


class Tier(models.Model):
    A = models.CharField(max_length=200)
    B = models.CharField(max_length=200)
    C = models.CharField(max_length=200)
    D = models.CharField(max_length=200)
    archive = models.CharField(max_length=200)
