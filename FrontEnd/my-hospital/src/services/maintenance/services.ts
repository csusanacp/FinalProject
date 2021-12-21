import { Maintenance } from "../../models/maintenance/types";


export const fetchMaintenance = async (): Promise<[]> => {
  const response = await fetch(
    "http://104.237.129.63:8003/equipment/maintenance/",
    {
      method: "GET",
    }
  );

  if (response.status === 200) {
    const maintenance: [] = await response.json();
    console.log(maintenance);
    return maintenance;
  } else {
    throw new Error("Error in query");
  }
};
export const fetchInfo = async (id:number): Promise<Maintenance> => {
  const response = await fetch(
    `http://104.237.129.63:8003/equipment/maintenance/${id}/`,
    {
      method: "GET",
    }
  );

  if (response.status === 200) {
    const maintenance: Maintenance = await response.json();
    console.log(maintenance);
    return maintenance;
  } else {
    throw new Error("Error in query");
  }
};
export const patchInfo = async (id: number, body: any): Promise<{}> => {
  const response = await fetch(
    `http://104.237.129.63:8003/equipment/maintenance/${id}/`, {
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
