// import data1 from './tb1.json';
import React, {useState, useEffect} from "react";
import '../App.css';
import {useParams} from "react-router-dom";
import {useFetch} from "../service/Fetch";

function Task(props) {
    const {parentId, tasks} = props;
    const [expanded, setExpanded] = useState(false);

    const task = tasks.find(task => task._id === parentId);
    const subtasks = task.subtasks || [];
    return (<div id="top_task" className="table">
        <li>
            <div className="tasks">
                <p>{task.key} {task.title}</p>
                {subtasks.length > 0 && <button onClick={() => setExpanded(!expanded)}>
                    Расширить
                </button>}
            </div>
        </li>
        {expanded && <ul className={parentId}>{subtasks.map(child => {
            return <Task tasks={tasks} parentId={child}/>
        })}</ul>}
    </div>)
}


export const Tasks = () => {
    const params = useParams();

    const [dat,loading, error] = useFetch(`/api/board/${params.key}`);

    if(loading){
        return <div>
            Loading...
        </div>
    }
    else {
        console.log(dat);
        const parents = dat.tasks.filter(da => !da.hasOwnProperty('parent'))
        return <ul>
            {parents.map(parent => {
                return <Task tasks={dat.tasks} parentId={parent._id}/>
            })}
        </ul>;
    }
}