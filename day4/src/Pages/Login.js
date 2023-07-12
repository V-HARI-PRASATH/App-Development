import { Link } from 'react-router-dom';
import Custbtn from '../Components/Custbtn';
import Inptxt from '../Components/Inptxt';
import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login()
{
    const navigate=useNavigate();
    const [uname,setUname]=useState("");
    const [unameer,setUnameer]=useState("");
    const [pass,setPass]=useState("");
    const [passer,setPasser]=useState("");
    const [uclass,setUclass]=useState("");
    const [pclass,setPclass]=useState("");
    const onChangeUname=(event)=>{
        setUname(event.target.value);
    }
    const onChangePass=(event)=>{
        setPass(event.target.value);
    }
    const valid=()=>{
        var flag=true;
        if(uname=="")
        {
            setUnameer("Please enter valid username");
            setUclass("err");
            flag=false;
        }
        else
        {
            setUclass("");
            setUnameer("");
        }
        if(pass=="")
        {
            setPasser("Please enter valid password");
            setPclass("err");
            flag=false;
        }
        else
        {
            setPclass("");
            setPasser("");
        }
        return flag;
    }
    const handleClick=()=>{
        if(valid())
        {
            navigate("/home");
        }
    }
    return(
        <div className="login">
            <center>
                <h1>LOGIN</h1>
                <Inptxt class={uclass} type="text" lable="Username" func={onChangeUname} ermsg={unameer}/>
                <Inptxt class={pclass} type="password" lable="Password" func={onChangePass} ermsg={passer}/>
                <Custbtn lable="Login" func={handleClick}/>
                <h2>Don't have an account? <Link to="/signup">Signup</Link></h2>
            </center>
        </div>
    )
}
export default Login;