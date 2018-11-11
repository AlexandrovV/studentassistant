import React from 'react';
import { Row, Col } from 'reactstrap';
import { Paper, Typography, Divider, InputAdornment, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    card: {
        padding: '40px'
    },
    questions: {
        marginTop: '20px'
    },
    question: {
        marginTop: '20px',
        padding: '20px'
    },
    img: {
        maxWidth: '100px',
        maxHeight: '100px'
    }
}

const Friends = props => {
    const { classes } = props;
    return (
        <Row>
            <Col md={{size: '8', offset: '2'}}>
                <Paper className={classes.card}>
                    <Typography variant="h4">Friends</Typography>
                    <TextField variant="outlined" placeholder="Search..." fullWidth InputProps={{startAdornment: (
                            <InputAdornment variant="filled" position="start">
                                <IconButton
                                    aria-label="Send"
                                    >
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                            )}}/> 
                    <Divider />
                    <div className={classes.questions}>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/images.png')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title"><Link to="/friend">Friend 1</Link></Typography>
                                    <Typography variant="body1">Some status...</Typography>
                                    <Link to="/chat">Write a message</Link>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/images.png')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title"><Link to="/friend">Friend 2</Link></Typography>
                                    <Typography variant="body1">Some status...</Typography>
                                    <Link to="/chat">Write a message</Link>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/images.png')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title"><Link to="/friend">Friend 3</Link></Typography>
                                    <Typography variant="body1">Some status...</Typography>
                                    <Link to="/chat">Write a message</Link>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/images.png')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title"><Link to="/friend">Friend 4</Link></Typography>
                                    <Typography variant="body1">Some status...</Typography>
                                    <Link to="/chat">Write a message</Link>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/images.png')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title"><Link to="/friend">Friend 5</Link></Typography>
                                    <Typography variant="body1">Some status...</Typography>
                                    <Link to="/chat">Write a message</Link>
                                </Col>
                            </Row>
                        </Paper>
                    
                    </div>
                </Paper>
            </Col>
        </Row>
    )
}

export default withStyles(styles)(Friends);