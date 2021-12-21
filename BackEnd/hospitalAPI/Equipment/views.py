from rest_framework.viewsets import ModelViewSet
from rest_framework import viewsets

from .serializers import *
from .models import *   

class EquipmentViewSet(viewsets.ModelViewSet):
    queryset =Equipment.objects.all()
    #permission_classes = (IsAuthenticated,)
    serializer_class = EquipmentSerializer

class MaintenanceViewSet(viewsets.ModelViewSet):
    queryset =Maintenance.objects.all()
    #permission_classes = (IsAuthenticated,)
    serializer_class = MaintenanceSerializer