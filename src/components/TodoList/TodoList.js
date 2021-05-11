import React, { useEffect, useState } from 'react';
import './todoList.scss'
import todoList from '../data.json'
import Task from '../EditTodoList/Task/Task';
import CreateTask from '../EditTodoList/CreateTask/CreateTask';
import ShowTask from '../ShowTask/ShowTask';

const TodoList = () => {
    const [data, setData] = useState(todoList.todoList)
    const [openCreate, setOpenCreate] = useState(false)
    const [isSort, setIsSort] = useState(false)
    const [isDoneAll, setIsDoneAll] = useState(false)
    const [editMode, setEditMode] = useState(true)

    const handleCreate = (newTask) => {
        if (newTask.description === '') {
            setOpenCreate(false)
        } else {
            let arrayId = (data && data.map(item => item.id)) || [0]
            let idMax = Math.max(...arrayId)
            let newTaskId = { id: idMax + 1, ...newTask }
            setData([newTaskId, ...data || []])
        }
    }

    const handleCheckDone = (task) => {
        setData(data.map((item) => { if (item.id === task.id) { return task } else { return item } }))
    }

    const handleDoneAll = () => {
        setData(data.map((item) => { return { ...item, isDone: true } }))
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

    const EditMode = () => {
        return (
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
                    {data && data.map((task) => <Task isDoneAll={isDoneAll} task={task} key={task.id} handleDeleteTask={handleDeleteTask} handleCheckDone={handleCheckDone} />)}
                </div>
                <div className='all-btn'>
                    <button className='all-btn-del' onClick={() => handleDeleteTask(null)}>
                        DEL ALL
                    </button>
                    <button className='all-btn-done' onClick={() => { handleDoneAll(); setIsDoneAll(!isDoneAll) }}>
                        Done All
                    </button>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='container'>
                <div className='title'>
                    TO DO data
                </div>
                <div className='mode'>
                    <h2 onClick={() => setEditMode(true)}>EDIT MODE</h2>
                    <h2 onClick={() => setEditMode(false)}>SHOW STATUS MODE</h2>
                </div>
                {(editMode && <EditMode />) || <ShowTask data={data} />}
            </div>
        </>

    )
}

export default TodoList;