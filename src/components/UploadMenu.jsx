import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { RxDashboard } from "react-icons/rx";
import { IoStatsChart } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { BiBookAlt } from "react-icons/bi";
import { AiTwotoneSchedule } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import "./DarkMode/DarkMode.css";
import "./upload.css";
import UploadFile from './UploadFile';
import DarkMode from './DarkMode/DarkMode';

function UploadMenu() {
  const[expanded,update]=useState(false);
  function changeState(){
    update(!expanded);
  }
    //const [menu_class,setClass]=useState("menu hidden");
    const [clicked,updateClicked]=useState(true);

    const doOpen=()=>{
        updateClicked(!clicked);
    }
    const [show,setShow]=useState(false);
    function doShowUploadPage(){
      setShow(true);
    }
  return (
    <>
    
    <div className='flex flex-row w-screen p-3 h-screen dark:bg-lightblack'>
    
    <div className=' float-left lg:w-[350px] sm:w-[50px]'>
        <nav className='h-[40px]'>
       {!clicked&& ( <div className='text-3xl dark:text-grey' onClick={doOpen}>
            <RxHamburgerMenu/>
        </div>   )} 
        </nav>
        
        {clicked &&(
        <div className='bg-white h-screen w-screen lg:w-[300px] rounded-e-3xl menu dark:bg-drkblack'>
       <div className='flex p-4 w-full'>
           <div className='w-8 font-semibold flex dark:text-white'>
           <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/676dc6e93660a53cc7f33212a004eebd4365898d38fc7341a08632f5d8cb6ee0?placeholderIfAbsent=true&apiKey=84eca5b8809b4b1d83d83f1067b6e653" alt="" />
             <span className='ml-5'>Base</span>
           </div>
           <div className='ms-auto dark:text-grey' onClick={doOpen}>
             <AiOutlineMenuFold/>
            </div>
       </div>
        <div className='text-2xl text-gray'>
            <ul className='space-y-8  pb-10 pt-10 cursor-pointer '>
                <li className='dark:hover:bg-lightblack'><div className='flex pl-10 p-2'><RxDashboard/> <span className='text-lg pl-7 '>Dashboard</span></div> </li>
                <li className='dark:hover:bg-lightblack'><div className='flex pl-10 p-2'><BiBarChartSquare/><span className='text-lg pl-7' onClick={doShowUploadPage}> Upload</span> </div></li>
                <li className='dark:hover:bg-lightblack'><div className='flex pl-10 p-2'><BiBookAlt/> <span className='text-lg pl-7'>Invoice</span></div> </li>
                <li className='dark:hover:bg-lightblack'><div className='flex pl-10 p-2'><AiTwotoneSchedule/><span className='text-lg pl-7'> Schedule</span> </div></li>
                <li className='dark:hover:bg-lightblack'><div className='flex pl-10 p-2'><FaCalendarAlt/> <span className='text-lg pl-7'>Calendar</span></div> </li>
                <li className='dark:hover:bg-lightblack'><div className='flex pl-10 p-2'><IoNotifications/><span className='text-lg pl-7'> Notifications</span> </div></li>
                <li className='dark:hover:bg-lightblack'><div className='flex pl-10 p-2'><IoSettingsSharp/><span className='text-lg pl-7'> Settings</span> </div></li>
               <li> <DarkMode/></li>
            </ul>
        </div>
      
        </div>
        )}
    </div>
   
    
    <div className='lg:hidden h-10  text-lg  flex mb-4' >
           <img className='ml-4' src="https://cdn.builder.io/api/v1/image/assets/TEMP/676dc6e93660a53cc7f33212a004eebd4365898d38fc7341a08632f5d8cb6ee0?placeholderIfAbsent=true&apiKey=84eca5b8809b4b1d83d83f1067b6e653" alt="" /> 
           <span className=' mt-1 dark:text-grey'>Base</span>
    </div>
    { show&&(
      <div>
    <UploadFile />
    </div> )}
    </div>
    </>
  )
}

export default UploadMenu