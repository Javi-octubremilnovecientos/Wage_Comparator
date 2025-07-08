import { useState } from "react";
import {
  UserIcon,
  MenuIcon,
  SunIcon,
  MoonIcon,
} from "../../assets/Icons/Icons";
import "../../Styles/index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Store/Slices/themeToggler";
import { useEffect } from "react";
import { displayModal } from "../../Store/Slices/userAccess";
export const Header = () => {
  const [open, setOpen] = useState(false);

  const [dark, setdark] = useState(false);

  const dispatch = useDispatch()

  const modalOpen= useSelector((state)=>{ state.userAccess.modal})

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLogging = ()=>{
    dispatch(displayModal)
  }

  const handleTheme = () => {
    setdark(!dark);
  };

 

  useEffect(() => {
    dispatch(toggleTheme({ payload: dark }));
  }, [dark]);

  return (
    <header>
  {modalOpen ? (
    <Link to={"/Profile"}><UserIcon/></Link>
  ) : (
    <UserIcon onClick={handleLogging}/> 
  )}

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
              <span
                className={dark ? "darkTheme" : ""}
                onClick={handleTheme}
              ></span>
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
