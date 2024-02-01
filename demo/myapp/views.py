from django.shortcuts import render
from .models import TodoItem
# Create your views here.\

from django.http import HttpResponse

def hello(request):
    return HttpResponse("Hello world")

def home(request):
    return render(request, "home.html")

def todos(request):
    items = TodoItem.objects.all()
    return render(request, "todos.html", {"todos": items})