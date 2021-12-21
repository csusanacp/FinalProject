import {FC} from  "react";
import images from "../assets"; 
import"./style.css";
import {Link } from "react-router-dom";




const Layout: FC=({children}) => {

  const {FacebookLogo, InstagramLogo, Logo, Log, Background}= images;


return (  
    <div className="hospital-container">
 
      <div className="hospital-header">  
        
      </div>

      <header className = "hospital-menu-container">
      <Link className="link-no-style" to="/">
         <img className= "logo"src={Logo}></img>
        </Link>
        <div className= "title">EUH <br /><p className= "name"> Enroute University Hospital</p> </div>
        
       <ul className="hospital-menu">
          <li className="clickable">About us</li>
          <li className="clickable">Our Services</li>
          <li className="clickable">Partnerships</li>
          <li className= "clickable">Directory</li>
        </ul>
        <Link to="/login">
         <img className= "login-icon"src={Log}></img>
        </Link>
      </header>
       
      <div className="hospital-body">{children}</div>
       
      <footer className= "hospital-footer">
      <ul className= "foot-list">
                <li className= "social-button">Join our team</li>
                <li className= "social-button">Our Newsletter</li>
                
            </ul>
            <ul className= "foot-list">
                <li className= "social-button">Associates</li>
                <li className= "social-button">Press</li>
            </ul>
            
            <ul className= "foot-list2">
                <li className= "social-button">{"Terms & Conditions"}</li>
                <li className= "social-button">Privacy Policy</li>
            </ul >
                <p className= "foot-list2"> © 2021 Enroute University Hospital.</p>
                <div className= "logos">
                <img alt= "FacebookLogo" className= "social-media-logo link"src={FacebookLogo}></img>
                <img alt= "InstagramLogo" className= "social-media-logo link" src={InstagramLogo}></img>
                
            </div>
      </footer>

    </div>
  );
};


export default Layout;
