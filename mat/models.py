from django.db import models


class Retangulo (models.Model):
    lado_a = models.IntegerField()
    lado_b = models.IntegerField()
    
    def __str__(self):
        return "{} {}".format(self.lado_a,self.lado_b)


# Create your models here.
