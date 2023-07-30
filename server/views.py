from rest_framework.views import APIView
from .models import User, Link, Tier, Order
from .serializer import LinkSerializer, UserSerializer, TierSerializer, OrderSerializer
from rest_framework.response import Response
from rest_framework import permissions
import re


class UsersView(APIView):
    def get(self, request):
        permission_classes = [permissions.IsAdminUser]
        if request.query_params:
            output = User.objects.get(username=request.query_params["username"],
                                      password=request.query_params["password"])
            data = {
                "username": output.username,
                "email": output.email,
                "first_name": output.first_name,
                "last_name": output.last_name,
                "patronymic": output.patronymic,
                "passport": output.passport,
                "birth_date": output.birth_date,
                "phone": output.phone,
                "id": output.id
            }

            return Response(data)
        else:
            output = [
                {
                    "username": output.username,
                    "email": output.email,
                    "first_name": output.first_name,
                    "last_name": output.last_name,
                    "patronymic": output.patronymic,
                    "passport": output.passport,
                    "birth_date": output.birth_date,
                    "phone": output.phone,
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
            "first_name": data.first_name,
            "last_name": data.last_name,
            "patronymic": data.patronymic,
            "passport": data.passport,
            "birth_date": data.birth_date,
            "phone": data.phone
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


class OrdersView(APIView):
    def get(self, request, user_id):
        output = [
            {
                "car_id": output.car_id,
                "car_mark": output.car_mark,
                "car_name": output.car_name,
                "car_tag": output.car_tag,
                "days_begin": output.days_begin,
                "days_end": output.days_end,
                "fel_name": output.fel_name,
                "price": output.price
            } for output in Order.objects.filter(user=user_id)
        ]
        return Response(output)

    def post(self, request, user_id):
        if user_id:
            request.data["user"] = user_id
            serializer = OrderSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)


class OrderView(APIView):
    def get(self, request, user_id, order_id):
        output = [
            {
                "car_id": output.car_id,
                "car_mark": output.car_mark,
                "car_name": output.car_name,
                "car_tag": output.car_tag,
                "price": output.price,
                "days_begin": output.days_begin,
                "days_end": output.days_end,
                "fel_name": output.fel_name
            } for output in Order.objects.filter(user=user_id, pk=order_id)
        ]
        return Response(output)

    def delete(self, request, user_id, order_id):
        order = Order.objects.get(pk=order_id, user=user_id)
        if order:
            order.delete()
            return Response("ok")
        return Response("order not found")
