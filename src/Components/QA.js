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

const QA = props => {
    const { classes } = props;
    return (
        <Row>
            <Col>
                <Paper className={classes.card}>
                    <Typography variant="h4">Questions and Answers</Typography>
                    <Divider />
                    <div className={classes.questions}>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/question.jpg')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title"><Link to="/question">Question 1</Link></Typography>
                                    <Typography variant="body1">Details of the question 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. </Typography>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/question.jpg')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title"><Link to="/question">Question 2</Link></Typography>
                                    <Typography variant="body1">Details of the question 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. </Typography>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/question.jpg')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title"><Link to="/question">Question 3</Link></Typography>
                                    <Typography variant="body1">Details of the question 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. </Typography>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/question.jpg')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title"><Link to="/question">Question 4</Link></Typography>
                                    <Typography variant="body1">Details of the question 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. </Typography>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/question.jpg')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title"><Link to="/question">Question 5</Link></Typography>
                                    <Typography variant="body1">Details of the question 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. </Typography>
                                </Col>
                            </Row>
                        </Paper>
                    </div>
                </Paper>
            </Col>
        </Row>
    )
}

export default withStyles(styles)(QA);