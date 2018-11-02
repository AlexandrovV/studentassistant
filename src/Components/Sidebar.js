import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <Drawer
                style={{overflow: 'hidden'}}
                variant="permanent"
            >
                <List>
                    <ListItem>
                        My profile
                    </ListItem>
                    <ListItem>
                        Friends
                    </ListItem>
                    <ListItem>
                        My group
                    </ListItem>
                    
                    <ListItem>
                    <Link to="/chat">
                        My Chats
                        </Link>
                    </ListItem>
                   
                    <ListItem>
                        My Homework
                    </ListItem>
                    <ListItem>
                        Move to dl.iitu.kz
                    </ListItem>
                </List>
            </Drawer>
        )
    }
}