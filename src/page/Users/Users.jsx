import React from "react";
import "./User.css"
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { useLocation } from "react-router-dom";
import UsersList from "./UsersList"

const Users= ()=>{

    const location= useLocation();
    // console.log(location);
    // console.log("hello from location");
    return(
        <div >
           <div className="home-container-1">
           <LeftSidebar/>
               <div className="home-container-2" style={{marginTop:"30px"}}>
                    <h1 style={{fontWeight:"400"}}>Users</h1>
                     <UsersList />
                     
                
               </div>
           </div>
        </div>
    )
}

export default Users

