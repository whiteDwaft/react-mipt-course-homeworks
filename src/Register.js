import React from "react";

export class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            repeatPassword: ''
        };
    }

    onClick = () => {
        console.log('[obabichev] submit form');
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
                        Login
                    </span>
                    <input name="login" value={this.state.login} onChange={this.onChange}/>
                </div>
                <div>
                    <span>
                        Password
                    </span>
                    <input name="password" value={this.state.password} onChange={this.onChange}/>
                </div>
                <div>
                    <span>
                        Repeat password
                    </span>
                    <input name="repeatPassword" value={this.state.repeatPassword} onChange={this.onChange}/>
                </div>
                <button onClick={this.onClick}>Click me</button>
            </div>
        );
    }
}
