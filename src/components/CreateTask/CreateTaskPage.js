import React, {useState} from "react";
import {useAuthSession} from "../../context/AuthContext";
import "./styles.css"

const CreateTaskPage = (props) => {
    const token = useAuthSession();

    console.log(props);

    const [form, setForm] = useState({title: "", boardId: props.dat._id, description: "", parentTaskId: ""});

    const {setSession} = useAuthSession();

    const OnChange = (event) => {
        setForm(
            {...form, [event.target.name]: event.target.value}
        )
    }

    const OnChangeSelect = (event) => {
        setForm(
            {...form, parentTaskId: event.target.options[event.target.selectedIndex].value}
        )
    }


    return (
        <form onSubmit={(event) => props.onSubmit(form, event)}>
            <tr>
                <td>
                    <div>
                        Title <br/>
                        <input name="title" onChange={OnChange} value={form.title}/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        Description <br/>
                        <input name="description" onChange={OnChange} value={form.description}/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        ParentTask <br/>
                        <select className="selectSize" name="parentTasks" onChange={OnChangeSelect}>
                            <option>нет</option>
                            {props.dat.tasks.map(task => {
                                return <option value={task._id}>{task.title}</option>
                            })}
                        </select>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <button type="submit" onClick={(event) => props.onSubmit(form, event)}>Add</button>
                    </div>
                </td>
            </tr>
        </form>
    )
}

export default CreateTaskPage;