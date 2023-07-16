from django.contrib.auth.models import User
from rest_framework.views import View, APIView
from .models import Link, Tier
from .serializer import LinkSerializer, UserSerializer, TierSerializer
from rest_framework.response import Response
import re


class UsersView(APIView):
    def get(self, request):
        if request.query_params:
            data = User.objects.get(username=request.query_params["username"],
                                    password=request.query_params["password"])
            output = {
                "username": data.username,
                "email": data.email,
                "id": data.id
            }
            return Response(output)
        else:
            output = [
                {
                    "username": output.username,
                    "email": output.email,
                    "id": output.id
                } for output in User.objects.all()
            ]
            return Response(output)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class UserView(APIView):
    def get(self, request, user_id):
        data = User.objects.get(id=user_id)
        output = {
            "username": data.username,
            "email": data.email,
            "id": data.id
        }
        return Response(output)

    def put(self, request, user_id):
        user = User.objects.get(id=user_id)
        if user:
            serializer = UserSerializer(user, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
            return Response("error when saving data")
        return Response("invalid data")


class LinksView(APIView):
    def get(self, request, user_id):
        output = [
            {
                "name": output.name,
                "link": output.link,
                "color": output.color,
                "id": output.pk
            } for output in Link.objects.filter(user=user_id).order_by("id")
        ]
        return Response(output)

    def post(self, request, user_id):
        if user_id:
            if not re.match("(https://)|(http://)+", request.data["link"]):
                request.data["link"] = "https://" + request.data["link"]
            request.data["user"] = user_id
            serializer = LinkSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)

    def delete(self, request, user_id):
        if user_id:
            link = Link.objects.get(user=user_id)
            if link:
                link.delete()
                return Response("ok")
            return Response("not ok")


class LinkView(APIView):
    def get(self, request, link_id, user_id):
        if user_id and link_id:
            output = [
                {
                    "name": output.name,
                    "link": output.link,
                    "color": output.color,
                    "id": output.pk
                } for output in Link.objects.filter(pk=link_id, user=user_id)
            ]
            if not output:
                return Response("No link with such query")
            return Response(output[0])
        return Response("No user selected")

    def put(self, request, link_id, user_id):
        link = Link.objects.get(pk=link_id, user=user_id)
        if link:
            if not re.match("(https://)|(http://)+", request.data["link"]):
                request.data["link"] = "https://" + request.data["link"]
            request.data["user"] = user_id
            serializer = LinkSerializer(link, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)

    def delete(self, request, link_id, user_id):
        link = Link.objects.get(pk=link_id, user=user_id)
        if link:
            link.delete()
            return Response("ok")
        return Response("not ok")


class TiersView(APIView):
    def get(self, request):
        output = [
            {
                "A": output.A,
                "B": output.B,
                "C": output.C,
                "D": output.D,
                "archive": output.archive
            } for output in Tier.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = TierSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

