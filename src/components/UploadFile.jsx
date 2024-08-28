import React, { useRef, useState } from 'react'
import * as XLSX from 'xlsx';
import {Dropdown} from './Dropdown';
import TableRow from './TableRow';
import TableHead from './TableHead';
function UploadFile() {
    const [excelFile,setExcelFile]=useState(null);
    const[error,setError]=useState(null);
    const [excelData,setData]=useState(null);
    const [file,setFile]=useState(null);

    const handleFile=(e)=>{
        let selFile=e.target.files[0];
        console.log(selFile);
        chk(selFile)
    }
        const chk=(selFile)=>{
            let fileType=['application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','text/csv'];
        if(selFile){
           if(fileType.includes(selFile.type))
            {
                setError(null);

               setFile(selFile.name);
            
                let reader=new FileReader();
                reader.readAsArrayBuffer(selFile);
                reader.onload=(e)=>{
                    setExcelFile(e.target.result);
                    console.log(e.target.result);
                }

               
            }
            else{
                setError('please select excel files onlys');
                setExcelFile(null);
            }
        }
        else{
            console.log("select plz");
        }
    }
    const handleFileSubmit=(e)=>{
        e.preventDefault();
        if(excelFile!=null){
            const workbook=XLSX.read(excelFile,{type:'buffer'});
            const worksheetName=workbook.SheetNames[0];
            const worksheet=workbook.Sheets[worksheetName];
            const data=XLSX.utils.sheet_to_json(worksheet);
            setData(data.slice(0,10));
        }
    }
    
    const handleDragOver=(event)=>{
        event.preventDefault();
    }
    const handleDrop=(event)=>{
        event.preventDefault();
        alert();
        let fileType=['application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','text/csv'];
      
        Array.from(event.dataTransfer.files)
        .filter((file)=>fileType.includes(file.type))
        .forEach((file)=>{
            console.log(file);
            chk(file);
            setFile(file.name);
        })
       console.log(file);
       
    }
    const inputRef=useRef();

  return (
    <div >
   <div className='h-12 '></div>
    <div className='text-xl dark:text-grey'>Upload CSV</div>
        <div className='bg-white mt-2 dark:bg-drkblack w-[400px] h-[400px] lg:h-[55vh] lg:w-[120vh] lg:m-16 p-7 rounded-lg ' onDragOver={handleDragOver} onDrop={handleDrop}>
        
            <div className='border-dashed border-grey border-2 h-64 rounded-lg w-400 text-center' > 
            {!file ?(
            <div className='mt-24 dark:text-white'>Drop your excel sheet here or 
              <div className='text-blue cursor-pointer' onClick={()=> inputRef.current.click()}>browse</div>
            </div>
            ):(
                <div className='dark:text-white m-20'>
                 {file}
                 <div className='text-red cursor-pointer' onClick={(e)=>setFile(null)}>Remove</div>
                </div>
            )}
            <input type="file" className='form-control' required onChange={handleFile} hidden ref={inputRef}/>
               
        
        </div>
        <form onSubmit={handleFileSubmit}>
              <input type='submit' className='bg-blue w-[360px] mt-6 p-2 rounded-xl mb-5 text-center lg:w-[100vh] lg:ml-10' ></input>
       
        {
            error&&(
                <div className='p-2 text-lg bg-red rounded-lg m-3'>
                    {error}
                </div>
            )
        }
        </form>
        
        </div>
        
       <div className='viewer'>
           {excelData ? (<>
            <div className='p-4 text-lg'>Uploads</div>
            <div class="overflow-x-auto">
               <table class=" w-full text-sm text-left rtl:text-right bg-table rounded-lg  dark:text-grey dark:bg-drkblack p-4 border-separate border-spacing-y-4">
                 <thead class="text-xs text-gray-700 uppercase bg-grey dark:bg-lightblack">
                
                 <TableHead data={Object.keys(excelData[0])}/>
                    {/* {Object.keys(excelData[0]).map((key)=>{
                        return(
                            <th className='p-2' key={key}>{key}</th>
                        )
                    })} */}
                    
                
                 </thead>
                 <tbody>
                    {
                        excelData.map((oneRow,index)=>(
                            <>  <TableRow data={Object.keys(oneRow)} oneRow={oneRow}/>
                                {/* {Object.keys(oneRow).map((key)=>(
                                    <td className='p-2' key={key}>{oneRow[key]}</td>
                                ))} */}
                            </>
                        ))
                    }
                 </tbody>
               </table>
               
            </div>
             </>
           ):(
            <div></div>
           )}
        </div>
    </div>
  )
}

export default UploadFile