import React, { useState } from 'react';
import Task from '../EditTodoList/Task/Task';
 
const ShowTask = ({ data,editMode }) => {
    const [list, setList] = useState(data)
    const handleShowDone = (isDone) => {
        setList(data.filter(item => item.isDone === isDone))
    }
    const handleShowAll = () => {
        setList(data)
    }
 
    return (
        <div className='showTask'>
            {(list && (
                <div>
                    <div className='filterTask'>
                        <button onClick={handleShowAll}>Show All</button>
                        <button onClick={()=>handleShowDone(true)}>Show Done</button>
                        <button onClick={()=>handleShowDone(false)}> Show Not Done</button>
                    </div>
                    <div className='dataTask'>
                        {list.map((list) => <Task task={list} key={list.id} editMode={editMode} />)}
                    </div>
                </div>
            )) || <div>There is no task to show</div>}
        </div>
 
    )
 
}
export default ShowTask;