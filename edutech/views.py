from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    return render(request,'indexmy.html')

def course(request):
    return render(request,'course.html')




