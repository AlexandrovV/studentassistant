import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './Components/Header';
import { Container, Row, Col } from 'reactstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Sidebar from './Components/Sidebar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Send from '@material-ui/icons/Send';

class App extends Component {
  render() {
    return (
      <div className="App" style={{position: 'relative'}}>
        <PrimarySearchAppBar />
        <Container style={{marginTop: '1rem'}}>
          <Row>
            <Col md="4">
              <Card>
                <CardContent>
                  <List>
                    <ListItem>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                      <ListItemText primary="John doe" secondary="Sep 30, 2018" />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <Avatar>
                      <ImageIcon />
                      </Avatar>
                      <ListItemText primary="Natalie Ross" secondary="Sep 30, 2018" />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                      <ListItemText primary="Charles	Burgess" secondary="Sep 30, 2018" />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                      <ListItemText primary="Dylan	Fraser" secondary="Sep 29, 2018" />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                      <ListItemText primary="Diane	Clark" secondary="Sep 29, 2018" />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                      <ListItemText primary="Leonard	McGrath" secondary="Sep 28, 2018" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Col>
            <Col md="8">
              <Card>
                <Paper style={{padding: '1rem'}}>
                  <Typography variant="headline" component="h3" style={{textAlign: "left"}}>
                    John doe
                  </Typography>
                </Paper>
                <CardContent>
                  <List>
                    <ListItem>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                      <ListItemText primary="John doe" secondary="Hello there!" />
                    </ListItem>
                    <ListItem>
                      <Avatar>
                      <ImageIcon />
                      </Avatar>
                      <ListItemText primary="Me" secondary="Hey!" />
                    </ListItem>
                    <ListItem>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                      <ListItemText primary="John doe" secondary="How you doing" />
                    </ListItem>
                    <ListItem>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                      <ListItemText primary="Me" secondary="fine, you ?" />
                    </ListItem>
                    <ListItem>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                      <ListItemText primary="John doe" secondary="fine, what assignment should we finish till tomorrow?" />
                    </ListItem>
                  </List>
                  <TextField variant="outlined" defaultValue="Ofc, we should finish project1 for SDP7" label="Type your message" fullWidth InputProps={{endAdornment: (
                    <InputAdornment variant="filled" position="end">
                      <IconButton
                        aria-label="Send"
                      >
                        <Send/>
                      </IconButton>
                    </InputAdornment>
                  )}}/>
                </CardContent>
              </Card>
            </Col>
          </Row>
          
        </Container>
      </div>
    );
  }
}

export default App;
