import React, { useState } from 'react';
import './createTask.scss'
const CreateTask = ({  handleCreate,setOpenCreate }) => {
    const [newTask, setNewTask] = useState({ isDone: false, description: '' })
    const handleCreateTask = (e) => {
        setNewTask({ ...newTask, description: e.target.value })
    }

    return (
        <>
            <form className='create-task' onSubmit={()=>{handleCreate(newTask)}}>
                <input placeholder='to do thing' onChange={handleCreateTask}></input>
                <input type='submit' value="create"/>
                <input type='reset' value='cancel'/>
            </form>
            {/* <div className='create-task'>
                <input placeholder='to do thing' onChange={handleCreateTask}></input>
                <button onClick={() => {handleCreate(newTask); setOpenCreate(false)}}>create</button>
                <button onClick={()=>setOpenCreate(false)}>cancel</button>
            </div> */}
        </>
    )
 
}
export default CreateTask;