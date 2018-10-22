import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Send from '@material-ui/icons/Send';

const Chat = (props) => {
    return (
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
    )
}

export default Chat;