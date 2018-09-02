import React, {Component} from 'react';
import {
    HashRouter,
    Switch,
    Link,
    NavLink,
    Route
} from 'react-router-dom'
import Main from './routes/Main'
import Auth from './routes/Auth'
import './App.css';
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/login" component={Auth} />
                        <PrivateRoute path="/home" component={Main} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;
