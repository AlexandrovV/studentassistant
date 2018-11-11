import React from 'react';
import { Row, Col } from 'reactstrap';
import ImageIcon from '@material-ui/icons/Image';
import { withStyles, Typography, Paper, InputAdornment, IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';

const styles = {
    card: {
        padding: '40px'
    },
    questions: {
        marginTop: '20px'
    },
    but: {
        margin: 'auto auto',
    },
    img: {
        display: 'block',
        margin: 'auto auto',
        maxWidth: '300px',
        maxHeight: '300px'
    }
}
const Donate = props => {
    const { classes, books, soft } = props;
    return (
        <Row>
            <Col>
                <Paper className={classes.card}>
                    <Typography variant="h4">
                        Donate us
                    </Typography>
                    <Divider />
                    <Typography variant="body1" className={classes.questions}>
                        <img src={require('../img/donate.png')} className={classes.img}/>
                        To support young entrepreneurs, click the button below 
                    </Typography><br/>
                    <Button variant="contained" color="primary">Donate</Button>
                </Paper>
            </Col>
        </Row>
    )
}
export default withStyles(styles)(Donate);