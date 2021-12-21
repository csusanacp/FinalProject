from django.db import models
from django.db.models.fields import AutoField

# Create your models here.
class Equipment(models.Model):
    equipment_id= models.AutoField(primary_key=True)
    equipment= models.CharField(max_length=20)
    brand= models.CharField(max_length=20)
    location= models.CharField(max_length=20)
    incorporation_date= models.DateField(max_length=20,null=True)
    warranty_date= models.DateField(max_length=20, null=True)
    
    
class Maintenance(models.Model):
    maintenance_id= models.AutoField(primary_key=True)
    equipmentid = models.CharField(max_length=5, null=True)
    date= models.DateField(max_length=15)
    maintenance_type=models.CharField(max_length=20)
    performed_by= models.CharField(max_length=30)
    observations=models.CharField(max_length=300)