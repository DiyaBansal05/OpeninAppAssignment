import React, { useContext, useState } from 'react'
import { selected } from './Dropdown';
function TagList({values,addVal}) {
    const ary=values.split(",");
    const [list,updateList]=useState(ary);
    if(addVal!=""){
      updateList([...list,addVal]);
    }
    function doRemove(index){
      list.splice(index,1);
      updateList([...list]);
    }
  return (
    
        <div className='flex'>
        {
          list.map((value,index)=>{
            return(
        <div className='bg-blue flex m-2 p-1 rounded-lg text-white' >
        <span>{value}</span>
        <div className='ml-1 cursor-pointer' onClick={doRemove}> x</div>
         </div>)})
        }
        </div>
    
  )
}

export default TagList

