import {useAuthSession} from "../../context/AuthContext";
import axios from "axios";
import React, {useState} from "react";

const AuthPage = () => {
    const [form, setForm] = useState({name: "", email: "", password: ""});

    const {setSession} = useAuthSession();

    const OnChange = (event) => {
        setForm(
            {...form, [event.target.name]: event.target.value}
        )
    }

    const [redirect, setRedirect] = useState(false);

    const nonce = `${Date.now()}}`;
    const clientId = '416520824005-i7rgnt5fcm7rd12av7p7h70ndvnmjodp.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:3000/google';
    const responseType = 'id_token';
    const scope = 'openid profile email';

    const onClick = () => setRedirect(true);

    if (redirect) {
        window.location = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&nonce=${nonce}`;
    }
    const OnSubmit = (event) => {
        event.preventDefault();
        axios.post("/api/auth/login", form)
            .then(response => setSession(response.data))
    }

    return (
        <div>
            <form>
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
                            <button type="submit" onClick={OnSubmit}>Logon</button>

                        </div>
                    </td>
                </tr>
            </form>
            <button onClick={onClick}>Google</button>
        </div>
    )

}

export default AuthPage;