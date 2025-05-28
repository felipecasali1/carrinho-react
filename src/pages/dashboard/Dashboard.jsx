import React from 'react'
import "./Dashboard.css";
import SideBar from '../../components/sidebar/SideBar';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div className="dashboard-layout">
          <SideBar />
          <div className="dashboard-content">
            <Outlet />
          </div>
        </div>
    );
}