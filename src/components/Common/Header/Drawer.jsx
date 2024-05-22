import React, { useState, useRef, useEffect } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { IconButton } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';


export default function SwipeableTemporaryDrawer() {
 const [open, setOpen] = useState(false);
 const drawerRef = useRef(null); // Ref for the drawer

 // Function to handle closing the drawer when tapping outside
 const handleCloseOnTapOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setOpen(false);
    }
 };

 // Effect to add and remove the touch event listener
 useEffect(() => {
    // Add the event listener when the drawer is open
    if (open) {
      document.addEventListener('touchstart', handleCloseOnTapOutside);
    }

    // Cleanup: remove the event listener when the drawer is closed or the component unmounts
    return () => {
      document.removeEventListener('touchstart', handleCloseOnTapOutside);
    };
 }, [open]);

 return (
    <div>
      <IconButton onClick={() => {
        console.log('IconButton clicked');
        setOpen(!open);
      }}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)} // Prevents the drawer from closing immediately
        onOpen={() => setOpen(true)}
        ref={drawerRef} // Attach the ref to the drawer
      >
        <div className="drawer-div">
          <Link to="/"><p className="link">Home</p></Link>
          <Link to="/analyze"><p className="link">Analyze</p></Link>
          <Link to="/dashboard"><p className="link">Dashboard</p></Link>
          <Link to="/watchlist"><p className="link">Watchlist</p></Link>
          <Link to="/portfolio"><p className="link">Portfolio</p></Link>
        </div>
      </SwipeableDrawer>
    </div>
 );
}
