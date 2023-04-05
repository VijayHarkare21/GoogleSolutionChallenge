from django.db import models

class Predictor(models.Model):
    image = models.ImageField(upload_to='predict')
