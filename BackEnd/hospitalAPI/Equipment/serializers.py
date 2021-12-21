
from .models import Equipment, Maintenance
from rest_framework import serializers

class EquipmentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Equipment
        fields = ['equipment_id', 'equipment', 'brand', 'location', 'incorporation_date','warranty_date']

class MaintenanceSerializer(serializers.ModelSerializer):
    #eq_id=serializers.ReadOnlyField(source= "equipment.equipment_id")
    #equipment= EquipmentSerializer()
    class Meta:
        model = Maintenance
        fields = [
            'equipmentid',
            'maintenance_id',
            'date',
            'maintenance_type',
            'performed_by',
            'observations'
            ]