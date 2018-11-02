import React from 'react';
import { Row, Col } from 'reactstrap';
import ImageIcon from '@material-ui/icons/Image';
import { withStyles, Typography, Paper, InputAdornment, IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';

const styles = {
    avatar: {
        minHeight: '300px',
        padding: '25px'
    },
    profile: {
        minHeight: '300px',
        padding: '25px'
    },
    edit: {
        margin: '10px 40px',
    },
    post: {
        minHeight: '100px',
        padding: '15px',
        margin: '15px'
    },
    newPost: {
        padding: '15px',
    }
};
const Profile = props => {
    const { classes } = props;
    return (
        <Row>
            <Col md="3">
                <Paper className={classes.avatar}>
                    <img src={require('../img/images.png')} />
                    <Button variant="contained" color="primary" className={classes.edit}>Edit Profile</Button>
                </Paper>
            </Col>
            <Col md="9">
                <Paper className={classes.profile}>
                    <Typography variant="h4">
                        Mock Mockson
                    </Typography>
                    <Typography variant="subtitle1">
                        CSSE-1601
                    </Typography>
                    <Typography variant="subtitle2">
                        Some status...
                    </Typography>
                    <div className={classes.newPost}>
                        <TextField variant="outlined" placeholder="Write something..." fullWidth InputProps={{endAdornment: (
                <InputAdornment variant="filled" position="end">
                    <IconButton
                    aria-label="Send"
                    >
                    <Send/>
                    </IconButton>
                </InputAdornment>
                )}}/> 
                    </div>
                    <Paper className={classes.post}>
                        <Typography variant="title">
                            Post 1 title
                        </Typography>
                        <Divider />
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non lorem nec orci pellentesque pharetra. Cras scelerisque nibh non justo suscipit, eu tempus ipsum pretium. Phasellus volutpat ultricies mi, vitae ultrices ante facilisis id. Nunc massa lectus, scelerisque in sem vel, finibus lobortis lorem. Nullam nec tempor ante, vitae suscipit urna. Nullam quis quam at dui tincidunt accumsan et in erat. Duis non posuere diam, a commodo magna. Integer non pharetra velit. Praesent tincidunt faucibus urna, eu sollicitudin magna rhoncus eget. Praesent non nulla erat. Curabitur suscipit nibh magna, ut fermentum quam ultrices eget. Proin et nisi at mauris semper iaculis.
                        </Typography>
                    </Paper>
                    <Paper className={classes.post}>
                        <Typography variant="title">
                            Post 2 title
                        </Typography>
                        <Divider />
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non lorem nec orci pellentesque pharetra. Cras scelerisque nibh non justo suscipit, eu tempus ipsum pretium. Phasellus volutpat ultricies mi, vitae ultrices ante facilisis id. Nunc massa lectus, scelerisque in sem vel, finibus lobortis lorem. Nullam nec tempor ante, vitae suscipit urna. Nullam quis quam at dui tincidunt accumsan et in erat. Duis non posuere diam, a commodo magna. Integer non pharetra velit. Praesent tincidunt faucibus urna, eu sollicitudin magna rhoncus eget. Praesent non nulla erat. Curabitur suscipit nibh magna, ut fermentum quam ultrices eget. Proin et nisi at mauris semper iaculis.
                        </Typography>
                    </Paper>
                    <Paper className={classes.post}>
                        <Typography variant="title">
                            Post 3 title
                        </Typography>
                        <Divider />
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non lorem nec orci pellentesque pharetra. Cras scelerisque nibh non justo suscipit, eu tempus ipsum pretium. Phasellus volutpat ultricies mi, vitae ultrices ante facilisis id. Nunc massa lectus, scelerisque in sem vel, finibus lobortis lorem. Nullam nec tempor ante, vitae suscipit urna. Nullam quis quam at dui tincidunt accumsan et in erat. Duis non posuere diam, a commodo magna. Integer non pharetra velit. Praesent tincidunt faucibus urna, eu sollicitudin magna rhoncus eget. Praesent non nulla erat. Curabitur suscipit nibh magna, ut fermentum quam ultrices eget. Proin et nisi at mauris semper iaculis.
                        </Typography>
                    </Paper>
                </Paper>
            </Col>
        </Row>
    )
}
 export default withStyles(styles)(Profile);