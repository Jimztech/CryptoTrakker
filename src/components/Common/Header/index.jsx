import React from 'react';
import "./styles.css";
import SwipeableTemporaryDrawer from './Drawer';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTrakker<span style={{ color: "var(--pink)"}}>.</span>
      </h1>
      <div className="links">
        <Link to="/"><p className="link">Home</p></Link>

        <Link to="/analyze"><p className="link">Analyze</p></Link>

        <Link to="/dashboard"><p className="link">Dashboard</p></Link>

        <Link to="/watchlist"><p className="link">Watchlist</p></Link>
        
        <Link to="/portfolio"><p className="link">Portfolio</p></Link>
      </div>

      <div className="mobile-drawer">
        <SwipeableTemporaryDrawer />
      </div>
    </div>
  )
}

export default Header;