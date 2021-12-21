import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './layout/component';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Home from './views/Home/component';
import Login from './views/Login/component';
import EquipmentInfo from './views/EquipmentInfo/component';
import MaintenanceInfo from './views/Maintenance/component';



const App = () => {

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path ="/login" element = {<Login/>}/>
          <Route path ="/equipment" element = {<EquipmentInfo/>}/>
          <Route path ="/maintenance" element = {<MaintenanceInfo/>}/>
          
        </Routes>
      </Layout>
    </div>
  );
};

export default App;


