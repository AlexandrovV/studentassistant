import React from 'react';
import { Row, Col } from 'reactstrap';
import { Paper, Typography, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

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

const Assignments = props => {
    const { classes } = props;
    return (
        <Row>
            <Col>
                <Paper className={classes.card}>
                    <Typography variant="h4">Assignments</Typography>
                    <Divider />
                    <div className={classes.questions}>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/assignment.png')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title"><Link to="/assignment">Assignment 1</Link></Typography>
                                    <Typography variant="body1">Details of the Assignment 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. </Typography>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/assignment.png')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title"><Link to="/assignment">Assignment 2</Link></Typography>
                                    <Typography variant="body1">Details of the Assignment 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. </Typography>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/assignment.png')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title"><Link to="/assignment">Assignment 3</Link></Typography>
                                    <Typography variant="body1">Details of the Assignment 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. </Typography>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/assignment.png')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title"><Link to="/assignment">Assignment 4</Link></Typography>
                                    <Typography variant="body1">Details of the Assignment 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. </Typography>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/assignment.png')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title"><Link to="/assignment">Assignment 5</Link></Typography>
                                    <Typography variant="body1">Details of the Assignment 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. </Typography>
                                </Col>
                            </Row>
                        </Paper>
                    </div>
                </Paper>
            </Col>
        </Row>
    )
}

export default withStyles(styles)(Assignments);