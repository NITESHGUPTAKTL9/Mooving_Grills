import React from 'react'


import SideBar from "./Sidebar";
import "./Navbar2.css";



export const Navbar2 = () => {
    return (
        <div>
            <div className="navbar2-body" id="outer-nav">
        <div className="menu-btn">
          <SideBar />
        </div>
       <a href="/"> <div className="logo">
           {/* <h1> Mooving Grills</h1> */}
           <img src="Images/logo1.png" alt="" className="logo-img"/>
          </div>
          </a> 
            
      </div>
     


            
        </div>
    )
}
