from django.db import models
'''
class Document(models.Model):
    myfilefield = models.FileField(upload_to='documents/')
'''

class ImageFile(models.Model):
    name = models.CharField(max_length=256)
    path = models.CharField(max_length=256)
