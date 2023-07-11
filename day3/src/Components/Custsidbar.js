import React, { useState } from "react";
import "./Custsidbar.css";
import MenuIcon from '@mui/icons-material/Menu';

function Custsidbar()
{
    const [visiblity,setVisiblity]=useState("hide");
    const handleClick=()=>{
        if(visiblity=="hide")
        {
            setVisiblity("visible")
        }
        else{
            setVisiblity("hide");
        }
    }
    return(

        <div className="custsidbar">
            <div className="indicate">
                <button className="menu" onClick={handleClick}><MenuIcon style={{color:"white"}}/></button>
            </div>
            <div className={visiblity}>

            </div>
        </div>
    )
}
export default Custsidbar;