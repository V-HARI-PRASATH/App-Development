import React, { useEffect, useState } from "react";
import "./Custnavbar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const Listele=(props)=>{
    if(props.loc=="/"+props.name.toLowerCase().replace(" ",""))
    {
        return(
            <Link to={"/"+props.name.toLowerCase().replace(" ","")}><div className="sele">{props.name}</div></Link>
        )
    }
    return(
        <Link to={"/"+props.name.toLowerCase().replace(" ","")}><div className="ele">{props.name}</div></Link>
    )
}
function Custnavbar(props)
{
    const list=["Home","Top Trainers","Products","Video Library","About"];
    const elelist=list.map((ele)=><Listele name={ele} loc={props.loc}/>);
    const [profilevis,setProfilevis]=useState(props.profilevis);
    const handleClick=()=>{
        if(profilevis=="profileboxvis")
        {
            setProfilevis("profileboxhide");
        }
        else{
            setProfilevis("profileboxvis");
        }
    }
    return(
        <div className="custnavbar">
            <div className="navbar">
            {elelist}
            <button className="profile" onClick={handleClick}><AccountCircleIcon fontSize="large"/></button>
            </div>
            <div className={profilevis}>
            </div>
        </div>
    )
}
export default Custnavbar;