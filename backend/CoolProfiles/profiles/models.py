from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    nickname = models.CharField(max_length=50)
    
    def __str__(self) -> str:
        return self.nickname
