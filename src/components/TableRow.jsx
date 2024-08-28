import React, { useState } from 'react'
import {Dropdown} from './Dropdown'
import TagList from './TagList'


function TableRow({data,oneRow}) {
    const[v,updateVar]=useState("");
    
  const addToList=(e)=>{
    //console.log(e.target.value);
    updateVar(e.target.value);
  }
  
    return(                    
    <tr className='bg-white dark:bg-lightblack rounded-lg p-2' >
      <td className='p-2'>
        {oneRow[data[0]]}
      </td>  
      <td className='p-2'>
        {oneRow[data[1]]}
      </td>  
      <td className='p-2'>
        {oneRow[data[2]]}
      </td>   
      <td className='p-2'>
        <Dropdown fun={addToList} />
      </td>
      <td className='p-2'>
            <TagList values={oneRow[data[3]]} addVal={v}/>
      </td>
  
   </tr>
    )  
         
    
  
}

export default TableRow