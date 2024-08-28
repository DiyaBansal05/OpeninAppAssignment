import React, { useRef,useState } from 'react';
import "../index.css";
import "./upload.css";
import DarkMode from './DarkMode/DarkMode';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

function Form() {
    const [espan,setEspan]=useState("");
    const [pspan,setpspan]=useState("");
    const eref=useRef();
    const pref=useRef();
    const chngeclr=(event)=>{
       
    }
    const navigate=useNavigate();

    const doLogin=()=>{
      const email="example@gmail.com";
      const pwd="Admin@123";
      console.log(eref.current.value);
      if(eref.current.value===undefined || pref.current.value===undefined)
        setEspan("Please fill credentials..");
      else
      if(eref.current.value===email && pref.current.value===pwd)
        navigate("/login-sucessful");
      else
       setEspan("Invalid username or password..");
    }
    function chkEmail(e){
      var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
      var email=e.target.value;
      if(e.target.value=="") 
        setEspan(" please fill your email..");
      else
      if(!regex.test(email)) 
        {
          setEspan("please fill a valid emailid..");
        
        e.target.style.border='red solid 1px';
      }
      else{
        e.target.style.border='green solid 1px';
        setEspan("");
      }
       
    }

    function chkPwd(e){
      var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/; 
      var p=e.target.value;
      if(e.target.value=="") 
        {
          setpspan("Please fill password")
      
            }
                else
      if(!regex.test(p)) {
        setpspan("Password must contain at least one capital letter,special symbol and a number...")
        e.target.style.border='red solid 1px';
      }
      else{
        e.target.style.border='green solid 1px';
        setpspan("");
      }
       
    }
    const onSuccess = (response) => {
      navigate("/login-sucessful");
  };
   
  return (
    <div className='flex w-screen h-screen dark:bg-drkblack'>
    
     <div className='hidden lg:flex w-1/2 h-full items-center bg-slate-400 p-10 m-2 '> 

        <div className=' lg:bg-blue w-screen h-screen rounded-xl'>
           <div className='py-2 bg-blue2 h-[600px] w-30 m-10 rounded-xl'>
             
               <div className='bg-white text-center mt-3 w-32 rounded-3xl text-lg p-2 m-10 flex top-3 font-semibold'>
               <img className='mr-3' src="https://cdn.builder.io/api/v1/image/assets/TEMP/676dc6e93660a53cc7f33212a004eebd4365898d38fc7341a08632f5d8cb6ee0?placeholderIfAbsent=true&apiKey=84eca5b8809b4b1d83d83f1067b6e653" alt="" /> 
                Base
               </div>
          
          <div className='text-white m-10  px-3 py-4 text-5xl'>
            Generate detailed reports with just one click
          </div>
          <div className='flex object-left-bottom'>
            <div className='mt-[190px]'><DarkMode/></div>
            <img className='h-[280px] r-[100px] w-50  ml-[180px]' src="./cameraGirl.png" alt="" />
        </div>
        </div>
        
        </div>
     </div>
     <div className='w-full flex lg:w-1/2 bg-cyan-50 py-2 px-10'>
        <div className=' m-10 w-full '>

        <div className='text-lg font-semibold lg:hidden flex mb-5 dark:text-white'> 
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/676dc6e93660a53cc7f33212a004eebd4365898d38fc7341a08632f5d8cb6ee0?placeholderIfAbsent=true&apiKey=84eca5b8809b4b1d83d83f1067b6e653" alt="" /> 
        Base</div>
        <p className='font-bold text-3xl dark:text-white'>Sign In</p>
        <p className='font-semibold text-sm dark:text-white'>Sign in to your account</p>

       
<div className='mt-5'>
         <GoogleLogin 
  onSuccess={credentialResponse => {
    navigate("/login-sucessful");
  }}
  onError={() => {
    console.log('Login Failed');
  }} 
/>
</div>
        
        <div className='h-[300px] w-[350px]  mt-10 rounded-xl p-5 bg-white dark:bg-lightblack dark:text-white'>
          
            <span className='font-semibold text-sm'>Email address</span><span className='text-red ml-1' >{espan}</span>
          <div>
            <input type="email" onBlur={chkEmail} ref={eref} className='dark:bg-drkblack dark:border-drkblack border-double bg-grey w-full rounded-lg p-2 font-normal text-sm' onChange={chngeclr}/>
          </div>

          <span className='font-semibold text-sm space-y-1'>Password</span><span className='text-red ml-1' >{pspan}</span>
          <div>
            <input type="password" ref={pref} className=' dark:bg-drkblack dark:border-drkblack border-double bg-grey w-full rounded-lg p-2 font-normal text-sm' onBlur={chkPwd}/>
          </div>

            <span className='text-xs text-blue'>Forgot password?</span>
          <div>
            <button className='font-semibold text-lg text-white bg-blue mt-5 text-center rounded-xl p-2 w-full' onClick={doLogin}>
               Sign in
            </button>
            </div>
        </div>
        <div className='font-normal text-sm space-y-1 mt-5 '> 
        <span className='dark:text-white'>Don't have an account?</span>
        <span className='text-blue'>Register here</span>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Form