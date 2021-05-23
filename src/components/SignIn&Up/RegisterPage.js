import React, {useState} from "react";
import {register} from "../../service/Fetch";
import {useMutation} from "react-query";
import axios from "axios";
import {useAuthSession} from "../../context/AuthContext";

const RegisterPage = () => {
    const [form, setForm] = useState({name: "", email: "", password: ""});

    const {setSession} = useAuthSession();

    const OnChange = (event) => {
        setForm(
            {...form, [event.target.name]: event.target.value}
        )
    }
    const OnSubmit = (event) => {
        event.preventDefault();
        axios.post("/api/auth/register", form)
            .then(response => setSession(response.data))
    }

    return (
        <form>
            <tr>
                <td>
                    <div>
                        Name <br/>
                        <input name="name" onChange={OnChange} value={form.name}/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        Email <br/>
                        <input name="email" onChange={OnChange} value={form.email}/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        Password <br/>
                        <input name="password" type="password" onChange={OnChange} value={form.password}/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <button type="submit" onClick={OnSubmit}>Register</button>
                    </div>
                </td>
            </tr>
        </form>
    )

}

export default RegisterPage;