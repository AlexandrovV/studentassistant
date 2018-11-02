import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from './Components/Sidebar';
import ChatPage from './Components/ChatPage';
import Home from './Components/Home';
import { Switch, Route } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Register from './Components/Register';
import QA from './Components/QA';
import Header from './Components/Header';
import Question from './Components/Question';

class App extends Component {
  render() {
    return (
      <div className="App" style={{position: 'relative'}}>
        <Header />
        <Container style={{marginTop: '1rem'}}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/chat' component={ChatPage} />
            <Route path='/profile' component={Profile} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/qa' component={QA} />
            <Route path='/question' component={Question} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
