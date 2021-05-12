import React, { useState } from 'react';
import Task from './Task/Task';
import CreateTask from './CreateTask/CreateTask';
import './editMode.scss'
 
const EditMode = ({ data, setData }) => {
    const [openCreate, setOpenCreate] = useState(false)
    const [isSort, setIsSort] = useState(false)
    const [isDoneAll, setIsDoneAll] = useState(false)
 
    const handleCreate = (newTask, e) => {
        //edit task
        e.preventDefault();
        if (newTask.id) {
            setData(data.map(item => { if (item.id === newTask.id) { return { ...item, description: newTask.description } } else return item }));
        }
 
        //create task
        else {
            if (newTask.description === '') {
                setOpenCreate(false)
            } else {
                let arrayId = (data && data.map(item => item.id)) || [0]
                let idMax = Math.max(...arrayId)
                let newTaskId = { id: idMax + 1, ...newTask }
                setData([newTaskId, ...data || []])
            }
        }
    }
 
    const handleCheckDone = (task) => {
        setData(data.map((item) => { if (item.id === task.id) { return task } else { return item } }))
    }
 
    const handleDoneAll = () => {
        data && setData(data.map((item) => { return { ...item, isDone: true } }))
    }
 
    const handleDeleteTask = (task) => {
        //delete task
        if (task) setData(data.filter((item) => { if (item.id !== task.id) return item }))
 
        //delete all
        else setData(null)
    }
    const handleSortAtoZ = () => {
        data && setData(data.sort((a, b) => a.description.localeCompare(b.description)))
        setIsSort(!isSort)
    }
    return (
        <>
            <div className='edit-container'>
                <div className='todolist-action'>
                    {(openCreate && <CreateTask handleCreate={handleCreate} setOpenCreate={setOpenCreate} />) || <button className='btn-add btn-css' onClick={() => setOpenCreate(true)}>
                        Add
                         </button>}
                    {/* <div className='todolist-action-addOn'>
                        
                        <button className='btn-shuffle' onClick={() => {
                            handleShuffle()
                            setIsSort(!isSort)
                        }}>Sort shuffle</button>
                    </div> */}
                </div>
                <div className='dataTask'>
                    {data && data.map((task) => <Task isDoneAll={isDoneAll} handleCreate={handleCreate} task={task} key={task.id} handleDeleteTask={handleDeleteTask} handleCheckDone={handleCheckDone} />)}
                </div>
                <div className='btn'>
                    <button className='btn-sort btn-css' onClick={handleSortAtoZ}>Sort A--Z</button>
                    <div className='btn-all'>
                        <button className='btn-all-done btn-css' onClick={() => { handleDoneAll(); setIsDoneAll(!isDoneAll) }}>
                            DONE ALL
                        </button>
                        <button className='btn-all-del btn-css' onClick={() => handleDeleteTask(null)}>
                            DEL ALL
                    </button>
                    </div>
                </div>
            </div>
        </>
 
    )
}
 
export default EditMode;