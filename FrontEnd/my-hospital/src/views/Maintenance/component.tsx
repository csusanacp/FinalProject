import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  {Maintenance} from "../../models/maintenance/types";
import {  fetchMaintenance } from "../../services/maintenance/services";
import"./style.css";

const MaintenanceInfo: FC = () => {
const [maintenances, setMaintenances] = useState<Maintenance[] | null>(null);


useEffect(() => {

    const getMaintenances = async () => {
      try {
        const recievedMaintenances = await fetchMaintenance();
        /*console.log(recievedEquipment)*/
        setMaintenances(recievedMaintenances);
      } 
      catch (error: any) 
      {
        console.error(error.message);
      } 

    };
    console.log(maintenances)
    if (maintenances === null) {
      getMaintenances();
    }
  }, [maintenances]); 
  

  return (
    <div className="maintenance-container">
        <ul className="maintenance-menu">
            <li className= "clickable-equipment">
                <Link to = "/equipment" className= "link"> Equipments</Link>
            </li>
            <li className= "clickable-equipment">
                <Link to = "/maintenance" className= "link"> Maintenance</Link>
            </li>
            <li className="clickable-equipment">Report a Problem</li>
        </ul>

        <div className="maintenance-display">
          
          <h3 className= "title-maintenance">List of Maintenances</h3>
          <div className="maintenance-submenu-container">
          <ul className="maintenace-submenu">
                <li className="clickable-equipment">
                    <Link to = "/NewMaintenance" className= "link"> New</Link>
                </li>
            </ul>
          </div>
    
          <ul className= "title-list">
            <li>Equipment ID</li>
            <li>Maintenance ID</li>
            <li>Date</li>
            <li>Type</li>
            <li>Performed by</li>
            <li>Observations</li>
          </ul>

        {maintenances?.map(maintenance => (
          <div className="details-container">
            <div className="details-maintenance">
            <p className="equipment-id">{maintenance.equipmentid}</p>
            <p className="maintenance-id">{maintenance?.maintenance_id}</p>
            <p className="maintenance-date">{maintenance?.date}</p>
            <p className="maintenance-type">{maintenance?.maintenance_type}</p>
            <p className="maintenance_performed">{maintenance?.performed_by}</p>
            <p className="maintenance-observations">{maintenance?.observations}</p> 
            </div>
        </div>))}
      </div>
      
      </div>

      
  );
};
export default MaintenanceInfo;
