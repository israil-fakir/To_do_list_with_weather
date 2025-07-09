import React, { useEffect, useState } from 'react';
import Todoitems from './Todoitems';
import { useRef } from 'react';

const Todo = () => {

    const [todoList, setTodolist] = useState(localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [])

    const inputUseRef = useRef();

    const additem = ()=>{
        const inputText = inputUseRef.current.value.trim();
        
        if (inputText === "") {
            return null
        }


        const newTodo = {

            id: Date.now(), 
            text: inputText,
            isComplete: false,
        }

        setTodolist((prev) =>
        [...prev,newTodo])
        inputUseRef.current.value="";

    }


    const deleteItem = (id)=>{
        setTodolist((prevtodo) =>{
            return prevtodo.filter((todoList) => todoList.id !== id)
        })
    }
    const toggle = (id)=>{
        setTodolist((prevtodo) =>{
            return prevtodo.map((todoList) => {
                if (todoList.id === id) {
                    return {...todoList, isComplete: !todoList.isComplete}                    
                }
                return todoList
            })
        })
    }

useEffect(()=>{
    localStorage.setItem("todoList",JSON.stringify(todoList))
},[todoList])

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

            <div className='flex items-center ml-7 gap-2'>
                <img className='w-10' src="src\assets\icon\to_do_test-50.png" alt="to do imgage" />
                <h1 className='text-3xl font-semibold'>To-do List</h1>
            </div>

            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input ref={inputUseRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='add your task' />
                <button onClick={additem} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-point'>add+</button>
            </div>

            <div>
                {todoList.map((item, index)=>{
                return <Todoitems key={item.id} id={item.id} text={item.text} isComplete={item.isComplete} deleteItem={deleteItem} toggle={toggle}/>
                })} 
            </div>
        </div>
    );
};

export default Todo;