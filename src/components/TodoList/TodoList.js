import React, { useState } from 'react';
import './todoList.scss'
import todoList from '../data.json'
import ShowTask from '../ShowTask/ShowTask';
import EditMode from '../EditTodoList/EditMode';
 
const TodoList = () => {
    const [data, setData] = useState(todoList.todoList)
    const [editMode, setEditMode] = useState(true)
 
    return (
        <>
            <div className='container'>
                <div className='title'>
                    TO DO LIST
                </div>
                <div className='mode'>
                    <h3 className={(editMode && 'mode-title active') || 'mode-title'} onClick={() => setEditMode(true)}>EDIT MODE</h3>
                    <h3 className={(!editMode && 'mode-title active') || 'mode-title'} onClick={() => setEditMode(false)}>SHOW STATUS MODE</h3>
                </div>
                <div className='list-container'>
                    {(editMode && <EditMode data={data} setData={setData} />) || <ShowTask data={data} editMode={editMode} />}
                </div>
            </div>
        </>
 
    )
}
 
export default TodoList;