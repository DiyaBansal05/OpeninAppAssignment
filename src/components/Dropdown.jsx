import React, { createContext, useState } from 'react'

const selected=createContext();

function Dropdown({fun}) {
  const [val,setVal]=useState();
  function update(e){
   fun(e);
  }
    const ary=['Technology', 'Fashion', 'Food', 'Travel', 'Sports', 'Music', 'Art', 'Health', 'Education', 'Finance'];
  return (
    <>
    <selected.Provider value={val}> </selected.Provider>
    <div className='border p-1 rounded-lg border-grey dark:text-lightblack dark:border-grey'>
        <select name="" id="" onChange={update}>
           { ary.map((val)=>{
                return(
                    <option value={val}>{val}</option>
                )
            })
           }
        </select>
    </div>
    </>
  )
}

export {Dropdown,selected}