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
            <form className='create-task' onSubmit={(e) => { handleCreate(newTask, e); setOpenCreate(false) }} >
                <input className='create-task-description' placeholder='to do thing' defaultValue={task.description} onChange={handleCreateTask} />
                <div className='create-task-action'>
                    <input className='create-task-action-create btn-css' type='submit' value={task.id ? "SAVE" : "CREATE"} />
                    <input className='create-task-action-cancel btn-css' type='reset' value='CANCEL' onClick={() => setOpenCreate(false)} />
 
                </div>
            </form>
        </>
    )
 
}
export default CreateTask;