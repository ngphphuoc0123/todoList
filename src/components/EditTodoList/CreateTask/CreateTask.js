import React, { useState } from 'react';
import './createTask.scss'

const initialTask = { isDone: false, description: '' }

const CreateTask = ({ task = initialTask, handleCreate, setOpenCreate }) => {
    const [newTask, setNewTask] = useState(task)
    const handleCreateTask = (e) => {
        setNewTask({ ...newTask, description: e.target.value })
    }

    return (
        <>
            <form className='create-task' onSubmit={() => { handleCreate(newTask) }} >
                <input placeholder='to do thing' defaultValue={task.description} onChange={handleCreateTask} />
                <input type='submit' value={task.id ? "SAVE" : "CREATE"} />
                <input type='reset' value='CANCEL' onClick={() => setOpenCreate(false)} />
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