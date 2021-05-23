import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useFetch} from "../../service/Fetch";
import {ProtectedComponent} from "../ProtectedComponent";
import {useAuthSession} from "../../context/AuthContext";
import Modal from "../Modal/Modal";
import axios from "axios";
import {CreateBoardPage} from "../CreateBoard/CreateBoardPage";
import "./styles.css"


const GetHeader = () => {
    return (
        <tr>
            <th colSpan="1">Title</th>
            <th colSpan="1">Key</th>
            <th colSpan="1">Owner</th>
            <th colSpan="1">Category</th>
        </tr>
    );
}

export const BoardsPage = () => {

    const [data,setData] = useState([]);
    const [open, setOpen] = useState(false);
    const {setSession} = useAuthSession();
    const [dat, loading, error] = useFetch("get,","/api/board",null,setData);
    console.log(dat);
    console.log(data);

    const token = useAuthSession();

    const OnSubmit = (form, event, icon) => {
        event.preventDefault();
        axios.post("/api/board", {...form, icon:icon}, {
            headers: {
                Authorization: `Bearer ${token.session.accessToken}`
            }
        }).then(response => {
            dat.push(response.data);
            setData(dat);
            setOpen(false);
        })
    }

    if (loading) {
        return <div>
            Loading...
        </div>
    }
    return <div className="table1">
        <ProtectedComponent>
            <button onClick={() => {setSession(null)}}>Logout</button>
        </ProtectedComponent>
        <button onClick={() => setOpen(true)}>Add Task</button>
        <Modal title="add Board" isOpen={open} cancel={() => setOpen(false)}>
            <CreateBoardPage onSubmit={OnSubmit}/>
        </Modal>
        <GetHeader/>
        {
            data.map(da => {
                const {key, title, owner, category} = da;
                return (
                    <tr className="boardTable">
                        <td className="boardTable">
                            <Link to={`/board/${key}`}>
                                {title}
                            </Link>
                        </td>

                        <td className="boardTable">{key}</td>
                        <td className="boardTable">{owner.name}</td>
                        <td className="boardTable">{category.value}</td>
                    </tr>
                )
            }
        )}
    </div>
}