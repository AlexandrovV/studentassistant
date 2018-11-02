import React from 'react';
import { Row, Col } from 'reactstrap';
import { withStyles, Typography, Paper, Divider, TextField, Button } from '@material-ui/core';

const styles = {
    form: {
        padding: '30px'
    },
    textField: {
        marginTop: '20px'
    },
    submit: {
        marginTop: '30px'
    }
}
const Register = props => {
    const { classes } = props;
    return (
        <Row>
            <Col md={{size: 6, offset: 3}}>
                <Paper className={classes.form}>
                    <Typography variant="h4">Sign Up</Typography>
                    <Divider />
                    <TextField className={classes.textField} label="Email" fullWidth/>
                    <TextField className={classes.textField} label="First Name" fullWidth/>
                    <TextField className={classes.textField} label="Last Name" fullWidth/>
                    <TextField className={classes.textField} label="Password" fullWidth/>
                    <TextField className={classes.textField} label="Password Confirmation" fullWidth/>
                    <Button className={classes.submit} color="primary" variant="contained" fullWidth>Sign Up</Button>
                </Paper>
            </Col>
        </Row>
    )
}

export default withStyles(styles)(Register);