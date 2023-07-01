from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import csrf_exempt
from . import models


def index(request):
    return render(request, "index.html")


def index2(request):
    data = get_object_or_404(models.Dictionary)
    return render(request, "index2.html", context={"data": data})


def rating(request):
    return render(request, "rating.html")


def info(request):
    return render(request, "info.html")


def faq(request):
    return render(request, "faq.html")


@csrf_exempt
def build(request):  # самое важное
    return render(request, "build.html")


@csrf_exempt
def patch(request):
    data = request.POST["data"]
    dic = models.Dictionary

    A = models.DictionaryVal
    B = models.DictionaryVal
    C = models.DictionaryVal
    D = models.DictionaryVal
    archive = models.DictionaryVal
    dic.values = [A, B, C, D, archive]
    dic.name = "tableLagushkiSend"

    dic.values[0].key = "rowA"
    dic.values[1].key = "rowB"
    dic.values[2].key = "rowC"
    dic.values[3].key = "rowD"
    dic.values[4].key = "rowArchive"
    for i in range(5):
        dic.values[i].value = data[i]
        dic.values[i].save()
    dic.save()

    return index(request)
