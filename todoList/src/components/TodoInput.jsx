import React, { useContext, useState } from 'react'
import { useTodo } from '../contexts'

function TodoInput() {
  const [task,setTask]=useState("")
  const {addToTheList}=useTodo()
  
  const addThisTask=(e)=>{
    e.preventDefault();
    if(!task) return
    addToTheList({
      task:task
    });
    setTask("");
  }
  return (
    <form
      className='flex w-full justify-center items-center'
      onSubmit={addThisTask} 
      id='todoEntry'
    >
      <input 
        className="flex h-12 w-11/12 border rounded-l-md rounded-r-none border-gray-400 px-3 py-1 focus:border-gray-800 focus:bg-gray-100" 
        type='text'
        placeholder='Assign a Task...'
        value={task}
        name='newTask'
        onChange={(e)=>setTask(e.target.value)}  
      />
      <button 
        className='flex justify-center items-center h-12 w-1/12 text-2xl border border-blue-950 rounded-r-md bg-blue-400 hover:bg-blue-500 active:bg-blue-700'
        type='submit'>✙</button>
    </form>
  )
}

export default TodoInput;