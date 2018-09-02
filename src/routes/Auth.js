import React, {Component} from 'react'
import logo from '../logo.svg';
import './Auth.css';
import firebase from 'firebase'

class Auth extends Component {
    state = {
        email: '',
        password: ''
    };

    signIn = (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(results => {
                const token = results.user.refreshToken;
                localStorage.setItem("token", token);
                this.props.history.push('/home')
            })
            .catch(function (error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
            });
    };

    render() {
        return (
            <form className="form-signin">
                <img
                    src="smieciowe-jedzenie-1.jpg"
                    className = "foodphoto"
                />
                <h1
                    className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label
                    for="inputEmail"
                    className="sr-only">
                    Email address
                </label>
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    autoFocus
                value = {this.state.email}
                onChange = {event => this.setState({ email: event.target.value})}
                />
                <label
                    for="inputPassword"
                    className="sr-only"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                    value = {this.state.password}
                    onChange = {event => this.setState({ password: event.target.value})}
                />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                onClick={this.signIn
                }>
                    Sign in
                </button>
                <p
                    className="mt-5 mb-3 text-muted"
                >
                    &copy; 2017-2018
                </p>
            </form>
        )
    }
}

export default Auth;