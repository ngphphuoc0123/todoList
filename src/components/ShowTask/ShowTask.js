import React, { useEffect, useState } from 'react';
import Task from '../EditTodoList/Task/Task';
import './showTask.scss'
 
const NothingToShow = {
    noTask: 'There is no task to show !',
    noTaskDone: "There is no task done !",
    doneAll: 'All tasks were done !'
}
 
const ShowTask = ({ data, editMode }) => {
    const [list, setList] = useState(data)
    const [announcement, setAnnouncement] = useState(NothingToShow.noTask)
    const [show, setShow] = useState('showAll')
 
    const handleShowDone = (isDone, annouce) => {
        setList(data.filter(item => item.isDone === isDone))
        setAnnouncement(annouce)
    }
 
    const handleShowAll = () => {
        setList(data)
    }
 
    useEffect(() => {
        switch (show) {
            case 'showAll':
                handleShowAll();
                break;
            case 'showDone':
                handleShowDone(true, NothingToShow.noTaskDone);
                break;
            case 'showNotDone':
                handleShowDone(false, NothingToShow.doneAll);
                break;
            default:
                break;
        }
    }, [show])
 
    if (!list) return (<div className='announcement'>{announcement}</div>)
 
    const DataTask = () => {
        if (list.length === 0) {
            return <div className='announcement'> {announcement}</div>
        }
        return list.map((list) => <Task task={list} key={list.id} editMode={editMode} />)
 
    }
 
    return (
        <div className='showTask'>
            <div>
                <div className='filterTask'>
                    <select className='show btn-css' name="show" id="show" onChange={(e) => setShow(e.target.value)}>
                        <option value="showAll" >All Tasks</option>
                        <option value="showDone" >Done</option>
                        <option value="showNotDone" >Not Done</option>
                    </select>
                </div>
                <div className='dataTask'>
                    <DataTask />
                </div>
            </div>
        </div>
    )
}
export default ShowTask;