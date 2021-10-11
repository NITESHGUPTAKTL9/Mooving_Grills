import React from 'react'
import "./USP.css";
export const USP = () => {
    return (
        <div className="usp-wrapper">

        <div className="usp-body">
            <div className="usp-heading">
               <h1> WHY WE ?</h1>
            </div>
            <div className="usp-content">
                <ul> 
                    <li> Best Pizza in Town</li>
                    <li> Fresh Dough</li>
                    <li> Authentic Ingredients</li>
                    <li> Starting @59/-</li>
                </ul>


            </div>
            <div >
             <a href="menubar">    <button className="order-now-btn"> Order Now !</button> </a>
            </div>
            
        </div>
        </div>
    )
}
