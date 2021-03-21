// import data1 from './tb1.json';
import React from "react";
import './App.css';

let data = null;
function getTasks(props) {
    console.log(data);
    const {subtasks} = data.tasks.filter(da => da._id === props)[0];
    const task = data.tasks.filter(da => da._id === props)[0];
    return (<div id="top_task" className="table">
        <li>
            <div className="tasks">
                <p>{task.key} {task.title}</p>
                <button hidden={subtasks.length === 0} onClick={(event) => {expandList({props}, event)}}>Расширить</button>
            </div>
        </li>
        <ul className={props} hidden={true}>{subtasks.map(child => {
            return getTasks(child)
        })}</ul>
    </div>)
}

const expandList = (title, event) => {
    const els = document.getElementsByClassName(title.props);
    if (event.target.innerText === "Расширить") {
        els[0].hidden = false;
        event.target.innerText = "Свернуть";
    } else {
        els[0].hidden = true;
        event.target.innerText = "Расширить";
    }
}


export const Tasks = (data1) => {
    data = data1;
    const parents = data1.tasks.filter(da => !da.hasOwnProperty('parent'))
    return <ul>
        {parents.map(parent => {
            return getTasks(parent._id)
        })}
    </ul>
}