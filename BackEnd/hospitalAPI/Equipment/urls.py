from django.urls import include, path

from rest_framework import routers 
from .views import *

router = routers.DefaultRouter()

router.register(r'equipment',EquipmentViewSet)
router.register(r'maintenance',MaintenanceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]