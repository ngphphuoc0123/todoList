import React, {  useState } from 'react';
import './editTodoList.scss'
import Task from '../Task/Task';
import CreateTask from './CreateTask/CreateTask';
 
const EditTodoList = ({ list,openCreate,setOpenCreate, handleCreate, handleCheckDone, handleDoneAll, handleDeleteTask }) => {
    const [data, setData] = useState(list)
    const [isSort, setIsSort] = useState(false)
    const [isDoneAll, setIsDoneAll] = useState(false)
 
    const handleSortAtoZ = () => {
        data && setData(data.sort((a, b) => a.description.localeCompare(b.description)))
        setIsSort(!isSort)
    }
 
    const handleShuffle = () => {
        let dataId = data.map(item => item.id)
        dataId.sort(() => Math.random() - 0.5)
        let dataShuffle = data.filter(item => dataId.map(id => { if (item.id === id) return item }))
        console.log(dataShuffle);
        // console.log(dataShuffle.map(ar=> ar.filter(item=>item)))
        data && setData(dataShuffle.filter(item => item))
 
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
                <div className='listTask'>
                    {data && data.map((task) => <Task isDoneAll={isDoneAll} task={task} key={task.id} handleDeleteTask={handleDeleteTask} handleCheckDone={handleCheckDone} />)}
                </div>
                <div className='del-all'>
                    <button className='del-all-btn' onClick={() => handleDeleteTask(null)}>
                        DEL ALL
                    </button>
                    <button className='del-all-btn' onClick={() => { handleDoneAll(); setIsDoneAll(!isDoneAll) }}>
                        Done All
                    </button>
                </div>
            </div>
        </>
 
    )
}
 
export default EditTodoList;