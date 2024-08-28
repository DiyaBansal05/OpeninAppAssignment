import React from 'react'

function TableHead({data}) {
  
    return(                    
        <tr className='bg-white rounded-lg p-2 dark:bg-lightblack' >
          <th className='p-2'>
            {data[0]}
          </th>  
          <th className='p-2'>
            {data[1]}
          </th>  
          <th className='p-2'>
            {data[2]}
          </th>   
          <th className='p-2'>
           Select Tags
          </th>
          <th className='p-2'>
            Selected Tags
          </th>
      
       </tr>
  )
}

export default TableHead