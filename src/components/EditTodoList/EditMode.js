import React, { useState } from 'react';
import Task from './Task/Task';
import CreateTask from './CreateTask/CreateTask';
import backgroundColor from './Task/Task'

const EditMode = ({ data, setData }) => {
    const [openCreate, setOpenCreate] = useState(false)
    const [isSort, setIsSort] = useState(false)

    const handleCreate = (newTask) => {
        //edit task
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

        setOpenCreate(false)
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

    const handleShuffle = () => {
        // let dataId = data.map(item => item.id)
        // dataId.sort(() => Math.random() - 0.5)
        // let dataShuffle = data.filter(item => dataId.map(id => { if (item.id === id) return item }))
        // console.log(dataShuffle);
        // // console.log(dataShuffle.map(ar=> ar.filter(item=>item)))
        // data && setData(dataShuffle.filter(item => item))
    }
    return (
        <>
            <div className='edit-container'>
                <div className='todolist-action'>
                    <div className='btn-add'>
                        {openCreate ? <CreateTask handleCreate={handleCreate} setOpenCreate={setOpenCreate} /> : <button onClick={() => setOpenCreate(true)}>
                            Add
                         </button>}
                    </div>
                    <div className='todolist-action-addOn'>
                        <button className='btn-sort' onClick={handleSortAtoZ}>Sort A--Z</button>
                        <button className='btn-shuffle' onClick={() => {
                            handleShuffle()
                            setIsSort(!isSort)
                        }}>Sort shuffle</button>
                    </div>
                </div>
                <div className='dataTask'>
                    {data && data.map((task) => <Task handleCreate={handleCreate} task={task} key={task.id} handleDeleteTask={handleDeleteTask} handleCheckDone={handleCheckDone} />)}
                </div>
                <div className='all-btn'>
                    <button style={{ backgroundColor: backgroundColor.done }} className='all-btn-done' onClick={handleDoneAll}>
                        Done All
                    </button>
                    <button style={{ backgroundColor: backgroundColor.notDone }} className='all-btn-del' onClick={() => handleDeleteTask(null)}>
                        DEL ALL
                    </button>
                </div>
            </div>
        </>

    )
}

export default EditMode;