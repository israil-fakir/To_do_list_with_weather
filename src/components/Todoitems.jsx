import React from 'react';
import checked from '../assets/icon/checked-checkbox-50.png';
import unchecked from '../assets/icon/unchecked-checkbox-50.png';

const Todoitems = ({text,id,isComplete,deleteItem,toggle}) => {
    return (
        <div className='flex items-center my-7 gap-2'>
            <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
                <img src={isComplete ? checked : unchecked} alt="" className='w-9'/> 
                <p className='text-slate-700 ml-4 text-[17]'>{text}</p>
            </div>         
                   
            <img onClick={() => {deleteItem(id)}} src="src\assets\icon\delete.png" alt="" className='cursor-pointer w-9'/>                
            
        </div>
    );
};

export default Todoitems;