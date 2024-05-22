import React from 'react';
import './styles.css';
import Button from "../../Common/Button";
import phone from "../../../assets/phone.png";
import { motion } from "framer-motion";

const MainComponent = () => {
  return (
    <div className="flex-info">
        <div className="left-component">
            <h1 className="track-crypto-heading">Stay Ahead.</h1>
            <h1 className="real-time-heading"> Track Crypto Easily</h1>
            <p className="info-text">
                Effortlessly track your crypto portfolio with our intuitive platform, staying ahead of market fluctuations. 
            </p>

            <div className="btn-flex">
                <Button text={"Dashboard"} />
                <Button text={"Portfolio"} outlined={true} />
            </div>
        </div>
        <div className='phone-container'>
          <motion.img 
            src={phone}
            className='phone-img'
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
    </div>
  )
};

export default MainComponent;