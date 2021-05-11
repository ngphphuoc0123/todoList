import React, { useEffect, useState } from 'react';
import './todoList.scss'
import todoList from '../data.json'
import ShowTask from '../ShowTask/ShowTask';
import EditMode from '../EditTodoList/EditMode';

const TodoList = () => {
    const [data, setData] = useState(todoList.todoList)
    const [editMode, setEditMode] = useState(true)

    useEffect(()=>{
        // setData()
        console.log('abc');
    },[data])
    return (
        <>
            <div className='container'>
                <div className='title'>
                    TO DO LIST
                </div>
                <div className='mode'>
                    <h2 onClick={() => setEditMode(true)}>EDIT MODE</h2>
                    <h2 onClick={() => setEditMode(false)}>SHOW STATUS MODE</h2>
                </div>
                {(editMode && <EditMode data={data} setData={setData} />) || <ShowTask data={data} editMode={editMode} />}
            </div>
        </>

    )
}

export default TodoList;