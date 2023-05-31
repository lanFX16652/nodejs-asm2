import React from 'react'
import { Outlet } from 'react-router-dom'
import classes from "./Layout.module.css";

import Siderbar from '../components/Sidebar/Siderbar';
import Hotel from '../components/Hotel/Hotel';
import NewHotel from '../components/Hotel/NewHotel';


const Layout = () => {
  return (
    <div className={classes.wrapper}>
        <Siderbar />
        <div className={classes['content-wrapper']}>
        <div className={classes['content-header']}></div>
            {/* <Outlet/> */}
            {/* <Hotel/> */}
            <NewHotel/>
        </div>
    </div>
  )
}

export default Layout

