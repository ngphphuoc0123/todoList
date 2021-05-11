import React, { useContext, useEffect, useState } from 'react';
import './task.scss'

const backgroundColor = { done: '#28ebde', notDone: '#e91e63' }

const Task = ({ task, handleDeleteTask, handleCheckDone, isDoneAll }) => {
    const [isDone, setIsDone] = useState(task.isDone)
    const [taskDescription, setTaskDescription] = useState(task.description)
    const [openEditBox, setOpenEditBox] = useState(false)
    useEffect(() => {
        setIsDone(task.isDone)
    }, [isDoneAll])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e);
        // setTaskDescription(value)
    }

    const handleOnChange = (e) => {
        handleCheckDone({ ...task, isDone: e.target.checked })
        setIsDone(e.target.checked);
    }
    const EditBox = () => {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <input name='description' type='text' defaultValue={taskDescription}   >
                    </input>
                    <input type="submit" value='Save' ></input>
                    <input type="reset" value='Cancel'></input>
                </form>
            </>
        )
    }
    return (
        <> {openEditBox ? <EditBox /> :
            <div className='task-container' style={isDone ? { backgroundColor: backgroundColor.done } : { backgroundColor: backgroundColor.notDone }}>
                <div className='task-description'>
                    {task.description}
                </div>
                <div className='task-action'>
                    <input className='task-check' type='checkbox' checked={isDone} onChange={(e) => handleOnChange(e)}></input>
                    <button className='task-btn-del' onClick={() => setOpenEditBox(!openEditBox)}>
                        Edit
                   </button>
                    <button className='task-btn-del' onClick={() => handleDeleteTask(task)}>
                        DEL
                </button>
                </div>
            </div>}
        </>
    )
}

export default Task;