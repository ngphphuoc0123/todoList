import React, { useState } from 'react';
import Task from '../EditTodoList/Task/Task';
 
const ShowTask = ({ data }) => {
    const [list, setList] = useState(data)
 
    const handleShowDone = () => {
        setList(data.filter(item => item.isDone === true))
    }
    const handleShowNotDone = () => {
        setList(data.filter(item => item.isDone === false))
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
                        <button onClick={handleShowDone}>Show Done</button>
                        <button onClick={handleShowNotDone}> Show Not Done</button>
                    </div>
                    <div className='dataTask'>
                        {list.map((list) => <Task task={list} key={list.id} />)}
                    </div>
                </div>
 
            )) || <div>There is no task to show</div>}
        </div>
 
    )
 
}
export default ShowTask;