import React, { useState } from "react";
import "./Custsidbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const Listele=(props)=>{
    if(props.loc=="/"+props.name.toLowerCase().replace(" ",""))
    {
        return(<Link to={"/"+props.name.toLowerCase().replace(" ","")}><div className="ssidele">{props.name}</div></Link>
        )
    }
    return(
        <Link to={"/"+props.name.toLowerCase().replace(" ","")}><div className="sidele">{props.name}</div></Link>
    )
}
function Custsidbar(props)
{
    const list=["Dashboard","Schedule","Clients","Programs","Payments","Analysis","Communication","Settings","help"];
    const sidelelist=list.map((ele)=><Listele name={ele} loc={props.loc}/>);
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
                {sidelelist}
            </div>
        </div>
    )
}
export default Custsidbar;