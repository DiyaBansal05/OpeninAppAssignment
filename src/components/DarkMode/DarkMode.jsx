import React from "react";
//  import { ReactComponent as Sun } from "./Sun.svg";
//  import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import useTheme from "../../contexts/theme";

const DarkMode = () => {
const {themeMode,lightTheme,darkTheme}=useTheme();  
const changetheme=()=>{
    if(themeMode==='dark')
        lightTheme();
    else 
       darkTheme();
}
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                checked={themeMode==='dark'}
                onChange={changetheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
               
            </label>
        </div>
    );
};

export default DarkMode;
