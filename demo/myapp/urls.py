from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello, name='index'),
    path('home/', views.home, name='home'),
    path('todos/', views.todos, name="todos")
]