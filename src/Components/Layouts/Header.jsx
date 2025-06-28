import { useState } from "react";
import {
  UserIcon,
  MenuIcon,
  SunIcon,
  MoonIcon,
} from "../../assets/Icons/Icons";
import "../../Styles/index.css";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import {toggleTheme } from "../../Store/Slices/themeToggler";
import { useEffect } from "react";
export const Header = () => {
  const [open, setOpen] = useState(false);
  const [dark, setdark] = useState(false)


   const handleOpen = ()=>{
    setOpen(!open)
   }
   
   const handleTheme = ()=>{
      setdark(!dark)
   }

   const dispatch = useDispatch()
  
     useEffect(() => {
      
        dispatch(toggleTheme({payload:dark}))
     
     }, [dark])
     


  
  return (
    <header>
     <Link to={"/Profile"}>  <UserIcon/></Link>
     

      {open ? (
        <nav>
          <button onClick={handleOpen}>X</button>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="theme">
            <div className="switch">
              <span className={dark? "darkTheme" : ""} onClick={handleTheme}></span>
            </div>
            <SunIcon />
            <MoonIcon />
          </div>
        </nav>
      ) : (
        <MenuIcon onClick={handleOpen} />
      )}
    </header>
  );
};
