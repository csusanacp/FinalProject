import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Equipment } from "../../models/equipment/types";
import { fetchEquipments, fetchInfo } from "../../services/equipment/services";
import"./style.css";

const EquipmentInfo: FC = () => {
const [equipments, setEquipments] = useState<Equipment[] | null>(null);


useEffect(() => {

    const getEquipments = async () => {
      try {
        const recievedEquipment = await fetchEquipments();
        /*console.log(recievedEquipment)*/
        setEquipments(recievedEquipment);
      } 
      catch (error: any) 
      {
        console.error(error.message);
      } 

    };
    console.log(equipments)
    if (equipments === null) {
      getEquipments();
    }
  }, [equipments]); 
  

  return (
    <div className="equipment-container">
            <ul className="equipment-menu">
                <li className="clickable-equipment">Equipments</li>
                <li className= "clickable-equipment">
                        <Link to = "/maintenance" className= "link"> Maintenance</Link>
                    </li>
                <li className="clickable-equipment">Report a Problem</li>
            </ul>

        <div className="equipment-display">
          
          <h3 className= "title-equipment">List of Equipments</h3>
          <div className="equipment-submenu-container">
          <ul className="equipment-submenu">
                <li className="clickable-equipment">
                  <Link to = "/NewEquipment" className= "link"> New</Link>
                  </li>
            </ul>
          </div>
    
          <ul className= "title-list">
            <li>ID</li>
            <li>Equipment</li>
            <li>Brand</li>
            <li>Location</li>
            <li>Incorporation Date</li>
            <li>Warranty ending</li>
          </ul>
        <div className="Container-details">
        {equipments?.map(equipment => (
          <div className="details-container">
            <div className="details">

            <p className="equipment-id">
            <Link to = "/details" className= "link"> {equipment.equipment_id}</Link>
              </p>
            <p className="equipment">{equipment?.equipment}</p>
            <p className="equipment-brand">{equipment?.brand}</p>
            <p className="equipment-location">{equipment?.location}</p>
            <p className="equipment-incorporation">{equipment?.incorporation_date}</p>
            <p className="equipment-warranty">{equipment?.warranty_date}</p> 
            </div>
        </div>))}
        </div>
      </div>
      
      </div>

      
  );
};
export default EquipmentInfo;
