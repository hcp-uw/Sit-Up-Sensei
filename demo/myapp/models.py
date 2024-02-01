from django.db import models

# Create your models here.


class TodoItem(models.Model):
    todo = models.CharField(max_length=200)
    due_date = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)