import React from "react";
import {register} from './service/auth';

export class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        };
    }

    onClick = () => {
        register(this.state)
            .then((data) => {
                localStorage.setItem('AUTH', JSON.stringify(data));
                this.props.auth(data);
            })
            .catch(error => {
                console.log('[obabichev] error', error);
            })
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <div>
                <div>
                    <span>
                        Name
                    </span>
                    <input name="name" value={this.state.name} onChange={this.onChange}/>
                </div>
                <div>
                    <span>
                        Email
                    </span>
                    <input name="email" value={this.state.email} onChange={this.onChange}/>
                </div>
                <div>
                    <span>
                        Password
                    </span>
                    <input name="password" value={this.state.password} onChange={this.onChange}/>
                </div>
                <button onClick={this.onClick}>Click me</button>
            </div>
        );
    }
}
