import { Equipment } from "../../models/equipment/types";
import { authorizationFetch } from "../../utils/auth/auth";


export const fetchEquipments = async (): Promise<[]> => {
  const response = await authorizationFetch(
    "http://104.237.129.63:8003/equipment/equipment/",
    {
      method: "GET",
    }
  );

  if (response.status === 200) {
    const equipment: [] = await response.json();
    console.log(equipment);
    return equipment;
  } else {
    throw new Error("Error in query");
  }
};
export const fetchInfo = async (id:number): Promise<Equipment> => {
  const response = await fetch(
    `http://104.237.129.63:8003/equipment/equipment/${id}/`,
    {
      method: "GET",
    }
  );

  if (response.status === 200) {
    const equipment: Equipment = await response.json();
    console.log(equipment);
    return equipment;
  } else {
    throw new Error("Error in query");
  }
};
export const patchInfo = async (id: number, body: any): Promise<{}> => {
  const response = await fetch(
    `http://104.237.129.63:8003/equipment/equipment/${id}/`, {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });

  if (response.status === 200) {
    const newInfoEquipment: any = await response.json();
    return newInfoEquipment;
  } else {
    throw new Error("Error in query");
  }
};

