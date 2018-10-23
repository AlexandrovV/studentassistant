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

class App extends Component {
  render() {
    return (
      <div className="App" style={{position: 'relative'}}>
        <PrimarySearchAppBar />
        <Container style={{marginTop: '1rem'}}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/chat' component={ChatPage} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
