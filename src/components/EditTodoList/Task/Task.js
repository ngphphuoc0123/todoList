import React, { useEffect, useState } from 'react';
import CreateTask from '../CreateTask/CreateTask';
import './task.scss'
import { MdDeleteForever } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
 
export const backgroundColor = { done: '#00ffcc', notDone: '#ff6666' }
 
const Task = ({ task, handleDeleteTask, handleCheckDone, handleCreate, editMode = true, isDoneAll }) => {
    const [isDone, setIsDone] = useState(task.isDone)
    const [openEditBox, setOpenEditBox] = useState(false)
 
    useEffect(() => {
        setIsDone(task.isDone)
    }, [isDoneAll])
 
    const handleOnChange = (e) => {
        handleCheckDone({ ...task, isDone: e.target.checked })
        setIsDone(e.target.checked);
    }
 
    return (
        <> {openEditBox ? <CreateTask task={task} setOpenCreate={setOpenEditBox} handleCreate={handleCreate} /> :
            <div className='task-container' style={isDone ? { backgroundColor: backgroundColor.done } : { backgroundColor: backgroundColor.notDone }} >
                <div className='task-description' style={!editMode ? {paddingLeft: 30} :{} }>
                    {editMode && <input className='task-check' type='checkbox' checked={isDone} onChange={(e) => handleOnChange(e)} />}
                    {task.description}
                </div>
                {editMode &&
                    <div className='task-action'>
                        <button style={isDone ? { backgroundColor: backgroundColor.done } : { backgroundColor: backgroundColor.notDone }} className='task-btn-del' onClick={() => setOpenEditBox(true)}>
                            <AiTwotoneEdit />
                        </button>
                        <button style={isDone ? { backgroundColor: backgroundColor.done } : { backgroundColor: backgroundColor.notDone }} className='task-btn-del' onClick={() => handleDeleteTask(task)}>
                            <MdDeleteForever />
                        </button>
                    </div>}
            </div>
        }
        </>
    )
}
 
export default Task;