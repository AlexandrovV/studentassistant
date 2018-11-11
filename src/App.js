import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from './Components/Sidebar';
import ChatPage from './Components/ChatPage';
import Home from './Components/Home';
import About from './Components/About';
import { Switch, Route } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Register from './Components/Register';
import QA from './Components/QA';
import Header from './Components/Header';
import Question from './Components/Question';
import Materials from './Components/Materials';
import Material from './Components/Material';
import Assignments from './Components/Assignments';
import Assignment from './Components/Assignment';
import Manual from './Components/Manual';
import Donate from './Components/Donate';
import Friends from './Components/Friends';
import Friend from './Components/Friend';
import MyGroup from './Components/MyGroup';

class App extends Component {
  render() {
    return (
      <div className="App" style={{position: 'relative'}}>
        <Header />
        <Container style={{marginTop: '1rem'}}>
          <Switch>
            <Route exact path='/' component={Profile} />
            <Route path='/about' component={About} />
            <Route path='/chat' component={ChatPage} />
            <Route path='/profile' component={Profile} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/qa' component={QA} />
            <Route path='/assignments' component={Assignments} />
            <Route path='/assignment' component={Assignment} />
            <Route path='/manual' component={Manual} />
            <Route path='/question' component={Question} />
            <Route path='/donate' component={Donate} />
            <Route path='/friends' component={Friends} />
            <Route path='/friend' component={Friend} />
            <Route path='/mygroup' component={MyGroup} />
            <Route exact path='/materials/books' component={() => <Materials books/>} />
            <Route exact path='/materials/soft' component={() => <Materials soft/>} />
            <Route exact path='/materials/book/1' component={() => <Material books/>} />
            <Route exact path='/materials/soft/1' component={() => <Material soft/>} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
