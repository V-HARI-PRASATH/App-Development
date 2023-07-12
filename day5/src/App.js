
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Custsidbar from './Components/Custsidbar';
import Custnavbar from './Components/Custnavbar';
import Home from './Pages/Home';
const Navi=()=>{
  const location=useLocation();
  if(location.pathname=="/" || location.pathname=="/signup")
  {
    return null;
  }
  return(
    <>
      <Custnavbar loc={location.pathname}/>
      <Custsidbar loc={location.pathname}/>
    </>
  )
}
function App() {
  return (
    <div className='bg'>
      <BrowserRouter>
        <Navi/>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
