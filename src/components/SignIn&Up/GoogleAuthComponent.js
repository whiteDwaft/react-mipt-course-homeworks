import {useParams} from "react-router-dom";
import axios from "axios";
import {useState} from 'react';
import {useAuthSession} from "../../context/AuthContext";
import {BoardsPage} from "../Boards/BoardsPage";

export const GoogleAuthComponent = (props) => {

    const {setSession} = useAuthSession();
    const [loading, setLoading] = useState(true);
    const id_token: string = props.location.hash.split("&")[0].slice(10);
    console.log(id_token);

    axios.post("/api/auth/google",{
        "id_token": id_token
    }, {
        headers: {
        'Content-Type': 'application/json'
    }
    })
        .then(response => {
            setSession(response.data);
            setLoading(false);
        });

    while (loading){
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    window.location = "http://localhost:3000/";
    return (
        <div/>
    )
}