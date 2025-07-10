import React, { useEffect, useState } from 'react';
import Todoitems from './Todoitems';
import WeatherWidget from './WeatherWidget'; // <-- Import the widget
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

    const renameItem = (id, newText) => {
        setTodolist((prevTodo) =>
            prevTodo.map((item) =>
                item.id === id ? { ...item, text: newText } : item
            )
        );
    };

useEffect(()=>{
    localStorage.setItem("todoList",JSON.stringify(todoList))
},[todoList])

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-3 min-h-[650px] rounded-xl'>
            {/* Header Row */}
            <div className="flex items-center justify-between mb-2">
                {/* Date on the left */}
                <span className="text-gray-500 ">
                    {new Date().toLocaleDateString('en-GB', {day: '2-digit',month: 'long',year:'numeric'})}
                </span>
                {/* Centered To-do List title */}
                <div className='flex-1 flex justify-center items-center gap-2'>
                    <img className='w-12' src="src/assets/icon/to_do_test-50.png" alt="to do image" />
                    <h1 className='text-3xl font-semibold'>To-do List</h1>
                </div>
                {/* Weather widget on the right */}
                <div className="flex-shrink-0 ml-2">
                    <WeatherWidget />
                </div>
            </div>

            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input ref={inputUseRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='add your task' />
                <button onClick={additem} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-point'>add+</button>
            </div>

            <div>
                {todoList.map((item) => (
                    <Todoitems
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        isComplete={item.isComplete}
                        deleteItem={deleteItem}
                        toggle={toggle}
                        renameItem={renameItem} // Pass the function
                    />
                ))}
            </div>
        </div>
    );
};

export default Todo;