import React from "react";
import "./Custbtn.css";

function Custbtn(props)
{
    return(
        <button className="custbtn" onClick={props.func}>
            {props.lable}
        </button>
    )
}
export default Custbtn;