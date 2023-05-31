import React from 'react';
import classes from "./Sidebar.module.css";

const Siderbar = () => {
  return (
    <div className={classes.wrapper}>
        <div className={classes.title}>
            <h2>Admin Page</h2>
        </div>

        <div className={classes['sidebar-wrapper']}> 
            <div>
                <h4 className={classes['menu-title']}>MAIN</h4>
                <div className={classes['menu-item']}>
                    <i className="bi bi-border-all"></i>
                    <span>Dashboard</span>
                </div>
            </div>
            <div>
                <h4 className={classes['menu-title']}>LIST</h4>
                <div className={classes['menu-item']}>
                    <i class="bi bi-person-fill"></i>
                    <span>Users</span>
                </div>
                <div className={classes['menu-item']}>
                    <i class="bi bi-buildings-fill"></i>
                    <span>Hotels</span>
                </div>
                <div className={classes['menu-item']}>
                <i class="bi bi-calendar-fill"></i>
                    <span>Rooms</span>
                </div>
                <div className={classes['menu-item']}>
                <i class="bi bi-truck"></i>
                    <span>Transactions</span>
                </div>
            </div>
            <div>
                <h4 className={classes['menu-title']}>NEW</h4>
                <div className={classes['menu-item']}>
                    <i class="bi bi-buildings-fill"></i>
                    <span>New Hotel</span>
                </div>
                <div className={classes['menu-item']}>
                    <i class="bi bi-calendar-fill"></i>
                    <span>New Room</span>
                </div>
            </div>
            <div>
                <h4 className={classes['menu-title']}>USER</h4>
                <div className={classes['menu-item']}>
                    <i class="bi bi-box-arrow-right"></i>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Siderbar