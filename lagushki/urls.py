from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name="index"),
    path('index2/', views.index2, name="index2"),
    path('build/', views.build, name="build"),
    path('rating', views.rating, name="rating"),
    path('info', views.info, name="info"),
    path('faq', views.faq, name="faq"),
    path('patch', views.patch, name=None)
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
