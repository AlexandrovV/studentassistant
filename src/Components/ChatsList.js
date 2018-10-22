import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const ChatsList = (props) => {
    return (
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
    )
}

export default ChatsList;