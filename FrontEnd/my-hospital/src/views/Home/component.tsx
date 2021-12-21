import { FC } from "react";
import "./style.css";
import images from "../../assets";
import { VscLocation } from "react-icons/vsc";

const Home: FC = () => {
  const { Background } = images;
  return (
    <div className="home-container">
      <div className= "line-one">
        <p className= "section-title">Latest technologies.<br /> Quality services.</p>
      </div>
      <div className="info-section-1">
      
      </div>
    </div>
      
  );
};
export default Home;
