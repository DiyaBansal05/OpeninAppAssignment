
import { useEffect, useState } from 'react';
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Form from './components/Form';
import { ThemeProvider } from './contexts/theme';
import UploadMenu from './components/UploadMenu';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  const [themeMode,setThemeMode]=useState('light');

  const darkTheme=()=>{
    setThemeMode('dark');
  }

  const lightTheme=()=>{
    setThemeMode('light');
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])

  return(
   
    <GoogleOAuthProvider clientId="138633943405-ntttiqiiu537mvvki9rdij1m8sk35kde.apps.googleusercontent.com">   
     <div>
    <BrowserRouter>
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      {/* <Form></Form> */}
      {/* <Upload></Upload> */}  
<Routes>
    <Route path='/' element={<Form />}></Route>
  <Route path='/login-sucessful' element={<UploadMenu />}></Route>
</Routes>
</ThemeProvider>
   </BrowserRouter>

</div>
</GoogleOAuthProvider>




  )
}

export default App
