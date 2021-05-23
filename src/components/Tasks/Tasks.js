import "./styles.css"
import React, {useState, useEffect} from "react";
import '../../App.css';
import {Link, useParams} from "react-router-dom";
import {useFetch} from "../../service/Fetch";
import Modal from "../Modal/Modal";
import CreateTaskPage from "../CreateTask/CreateTaskPage";
import axios from "axios";
import {useAuthSession} from "../../context/AuthContext";



function Task(props) {
    const {parentId, tasks} = props;
    const [expanded, setExpanded] = useState(false);

    const task = tasks.find(task => task._id === parentId);
    const subtasks = task.subtasks || [];
    return (<div id="top_task" className="table">
        <li>
            <div className="tasks">
                {task.key} {task.title}
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

    const [data,setData] = useState([]);
    const token = useAuthSession();

    const OnSubmit = (form,event) => {
        event.preventDefault();
        axios.post("/api/task",form,{
            headers:{
                Authorization: `Bearer ${token.session.accessToken}`
            }
        }).then(response => {
            setData(response.data);
            setOpen(false);
        })
    }

    const params = useParams();

    const [open, setOpen] = useState(false);

    const [dat, loading, error] = useFetch("get", `/api/board/${params.key}`, null,setData);



    if (loading) {
        return <div>
            Loading...
        </div>
    } else {
        console.log(data);
        const parents = data.tasks.filter(da => !da.hasOwnProperty('parent'))
        return <div>
            <button onClick={() => setOpen(true)}>Add Task</button>
            <Modal title="add Task" isOpen={open} cancel={() => setOpen(false)}>
                <CreateTaskPage dat = {data} onSubmit = {OnSubmit}/>
            </Modal>
            <ul>
                {parents.map(parent => {
                    return <Task tasks={data.tasks} parentId={parent._id}/>
                })}
            </ul>
        </div>;
    }
}