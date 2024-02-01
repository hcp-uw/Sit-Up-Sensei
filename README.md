# Getting started with Django

## Setting up your environment

The first thing you have to do to get started with django is making sure your enviornment is set up correctly. For this guide, I will be using Python 3.11.0 on Windows 11 so your commands might be different if you are using a Mac or a Linux machine.

Create an empty directory where you want your django project to be, I will name my directory __my_app__. Inside the directory, create a virtual environment with the following code running on Window Powershell or the integrated terminal in VS Code.

```bash
python -m venv venv
```

If the following does not work you could also try this

```bash
python3 -m venv venv
```

This will create a virtual environment called _venv_ in your current directory. Now we can activate this by running the following command

```py
./venv/Scripts/activate
```

You should see _"(venv)"_ on the left side of your terminal indicating that you are inside a virtual environment. If it gives you an error, make sure you are in the right directory and try again. Once you want to get out of the virtual environment, you can type ```exit``` in the terminal and you will exit the virtual environment.

After we setup our environment, we want to download django by using pip with the following code.

```py
pip install django
```

Once you have django installed, you can simply create a new django project by typing

```py
django-admin startproject project_name
```

Where "project_name" is the name of the project you want, in my case I named my project "demo". And you are done! You should see a folder called demo with another folder called demo and manage.py inside if all went well with the following directory tree.

```vim
├─demo/
│  └─demo/
│  └─manage.py
├─venv/
```

## Getting to know the structure

If you look inside the inner demo folder, you can see that it contains a lot of files. You should never have to modify any of these files
```vim
__init__.py
asgi.py
wsgi.py
```

In simple terms,  ```urls.py``` file is where you can link django projects to the public facing website. The ```settings.py``` is where you tell your main application what django projects to use for the current deployment. One level up in the directory, ```manage.py``` is a command line utility that lets you interact with the Django projects in a much more intuitive and simpler way.

## Writing your first endpoint

The demo folder is like the core element in our backend and now we have to make a new project if we want to actually do stuff. First, lets start the server right now and see what the website looks like. Cd into the uppermost demo file and run

```bash
python manage.py runserver
```

Don't worry about the errors now and navigate to localhost:8000 and you should see a simple django template website.

Now head back to VS Code and lets create our first django app.

```bash
python manage.py startapp myapp
```

where "myapp" can you any name you want. This should create a new folder so that your directory now looks like this

```vim
├─demo/
│  └─demo/
│  └─myapp/
│  └─manage.py
├─venv/
```

Before continuing, go to the ```settings.py``` inside ```demo``` and make sure to add ```myapp``` to the installed apps list so that after your done, ```settings.py``` should look something like this.

```py
...
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'myapp'
]
...
```

Inside the myapp folder, create a file called ```urls.py``` (Make sure the file is called exactly ```urls.py```). Inside ```urls.py```, copy this boilerplate code in

```py
from django.urls import path
from . import views

urlpatterns = [
    path('hello', views.hello, name='index')
]
```

This file basically maps all urls that come after ```localhost:8000/myapp/*```. So for example, if we instead had

```py
from django.urls import path
from . import views

urlpatterns = [
    path('something', views.something, name='index')
]
```

We are mapping ```localhost:8000/myapp/something``` to ```views.index```.

Now head over to views.py and copy this code in

```py
from django.http import HttpResponse

def hello(request):
    return HttpResponse("Hello world")
```

This is the function that will be called when we request the page ```localhost:8000/myapp/hello```

Finally we have to connect the entire myapp django project to our root service. Go into ```demo/urls.py``` and make sure it looks like this

```py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('myapp/', include('myapp.urls'))
]
```

Now when you start the server and head to ```localhost:8000/myapp/hello``` you should see the text "Hello world" show up!


## Models

The first thing we have to do to use a database with Django is to create what is known as a _model_ in ```models.py```. You can think of models as a table for a database. Navigate to ```models.py``` in ```/myapp``` and paste in the code below.

```py
from django.db import models

# Create your models here.


class TodoItem(models.Model):
    todo = models.CharField(max_length=200)
    due_date = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)
```

This creates a model called ```TodoItem``` that contains three fields ```todo```, ```due_date```, and ```completed```.

Now navigate to ```admin.py``` to add your models to the admin page to modify and view the model.

```py
from django.contrib import admin
from .models import TodoItem

#Register your models here.
admin.site.register(TodoItem)
```

## Migrations

When you start the server, you will notice a lot of erros complaining about unapplied migrations. How Django works is that every time you make changes to _models_ you need to tell the applications to look for changes and actually make the changes necessary. For now, all that means is that you should be running

```bash
python manage.py makemigrations
```

and

```bash
python manage.py migrate
```

when you first create a project and when you are modifying any _models_. Since we added TodoItem model, we should run the two commands to make migrations.

## Templates

Templates in Django are a bit like components in React. You can make many templates and choose which one to show to the client at different times and do many cools things inside a template.

The first thing we will do is create a folder called ```templates``` inside ```/myapp``` folder. Important to note that the name has to be ```templates``` or it will not work. Inside ```templates``` create a file called ```base.html``` which will contain the base material for doing all the cool stuff. Right now don't worry about understanding everything but paste in the code below to ```base.html```

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta
            name="viewport"
            content="width=edvice-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{% block title %}Django App{% endblock %}</title>
    </head>
    <body>
        <div class="container">{% block content %} {% endblock %}</div>
    </body>
</html>
```

After creating ```base.html``` create another file called ```home.html``` right next to ```base.html``` and paste in the code below

```html
{% extends "base.html" %} {%block title %} Home Page {% endblock %}
{% block content %}
<p>Home page</p>
{% endblock %}
```

What ```home.html``` does is that it inherits the ```base.html``` file and adds more features to it.

To actuall get this page to show up, we need to add it to our ```views.py``` and ```urls.py``` so that ```views.py``` should be like this

```py
from django.shortcuts import render

# Create your views here.\

from django.http import HttpResponse

def hello(request):
    return HttpResponse("Hello world")

def home(request):
    return render(request, "home.html")

```

and ```urls.py``` should be like this

```py
from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello, name='index'),
    path('home/', views.home, name='home')
]
```

We are just adding a new view and adding it to our public urls.

\
\
\
Now lets combine everything we have done and make a webpate that renders models we have made and stored to a database. Create a ```todos.html``` inside the templates folder and paste the code below

```html
{% extends "base.html" %} {% block content %}
<h1>TODO List</h1>
<ul>
    {% for todo in todos %}
    <li>
        {{ todo.todo }}: {% if todo.completed %}Completed{% else %} Not completed{% endif %} | {{todo.due_date}}
    </li>
    {% endfor %}
</ul>
{% endblock %}
```

This is basically rendering each element in the todos list with some Django html syntax. Now we have to add this to our ```views.py``` file.

```py
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
```

You might have noticed we also imported ```TodoItem``` which we feed into our todos request to render. After this we have to add this to our urls.  Again, head to ```urls.py``` inside the current folder ```myapp``` and your ```urls.py``` should be like this

```py
from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello, name='index'),
    path('home/', views.home, name='home'),
    path('todos/', views.todos, name="todos")
]
```

## Admin page

First create a superuser by running

```bash
python manage.py createsuperuser
```

If you are getting an error, make sure you have already migrated the newly made project. After creating the superuser, start the server and visit ```localhost:8000/admin``` and sign in with your credentials you just created.

I will use the following username and password and skip the email

```txt
Username: HCP
Email address:
Password:huskycodingproject
```

In the admin page you should see a section at the bottom called ```myapp``` with ```Todo items``` as a field. Click add and make as many Todos as you want. After creating, head over to ```http://127.0.0.1:8000/myapp/todos/``` to check out all the Todos you have created.

## Database

The default option for Django is using a Sqlite3 database for the Todo items you have created and other models you will create. You can view the ```db.sqlite3``` file in the directory which is where everything is stored. If you want to use a different database, go into ```settings.py``` under ```demo/``` and find the list with database

```py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Here, you can modify the engine to use different database for your project.
From Django docs,

```txt
Django officially supports the following databases:

* PostgreSQL
* MariaDB
* MySQL
* Oracle
* SQLite
```

For a quick example of PostgreSQL, you would modify the DATABASE list to be the following

```py
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "OPTIONS": {
            "service": "my_service",
            "passfile": ".my_pgpass",
        },
    }
}
```

With separate ```my_service``` and ```.my_pgpass``` file for your secrets and options.

Django is a powerful python web framework used by websites like Instagram and Spotify. There are a lot of cool features that are too broad to cover in this small README but if you decide to use Django as backend for your projects you will undoubtably learn more about python and web framework from one of the leaders in the field.




