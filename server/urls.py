from django.urls import path
from . import views

urlpatterns = [
    path("users", views.UsersView.as_view(), name="users"),
    path("users/<int:user_id>", views.UserView.as_view(), name="user"),
    path("favlinks/<int:user_id>/links", views.LinksView.as_view(), name="link"),
    path("favlinks/<int:user_id>/links/<int:link_id>", views.LinkView.as_view(), name="linki"),
    path("lagushki/tiers", views.TiersView.as_view(), name="tiers"),
    path("indexdrive/<int:user_id>/orders", views.OrdersView.as_view(), name="orders"),
    path("indexdrive/<int:user_id>/orders/<int:order_id>", views.OrderView.as_view(), name="order")
]
