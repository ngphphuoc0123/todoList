import React, {  useState } from 'react';
import CreateTask from '../CreateTask/CreateTask';
import './task.scss'

export const backgroundColor = { done: '#00ffcc', notDone: '#ff6666' }

const Task = ({ task, handleDeleteTask, handleCheckDone, handleCreate, editMode = true }) => {
    const [isDone, setIsDone] = useState(task.isDone)
    const [openEditBox, setOpenEditBox] = useState(false)

    const handleOnChange = (e) => {
        handleCheckDone({ ...task, isDone: e.target.checked })
        setIsDone(e.target.checked);
    }

    return (
        <> {openEditBox ? <CreateTask task={task} setOpenCreate={setOpenEditBox} handleCreate={handleCreate} /> :
            <div className='task-container' style={isDone ? { backgroundColor: backgroundColor.done } : { backgroundColor: backgroundColor.notDone }} >
                <div className='task-description'>
                    {task.description}
                </div>
                {editMode &&
                    <div className='task-action'>
                        <input className='task-check' type='checkbox'  checked={isDone} onChange={(e) => handleOnChange(e)} />
                        <button className='task-btn-del' onClick={() => setOpenEditBox(!openEditBox)}>
                            Edit
                   </button>
                        <button className='task-btn-del' onClick={() => handleDeleteTask(task)}>
                            DEL
                </button>
                    </div>}
            </div>}
        </>
    )
}

export default Task;