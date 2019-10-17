import React, {Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login';
import SignIn from './components/signup';

class App extends Component  {
    constructor (props) {
        super(props);
    }
    render () {
        return (
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/SignIn' component={SignIn}/>
        </Switch>
        )
    }
}

export default App;