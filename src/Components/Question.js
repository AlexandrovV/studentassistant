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
    question: {
        marginTop: '20px',
        padding: '20px'
    },
    img: {
        maxWidth: '100px',
        maxHeight: '100px'
    }
}
const Question = props => {
    const { classes } = props;
    return (
        <Row>
            <Col>
                <Paper className={classes.card}>
                    <Typography variant="h4">
                        Question 1
                    </Typography>
                    <Divider />
                    <Typography variant="body1" className={classes.questions}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. Sed vitae lorem magna. Fusce congue posuere tristique. Suspendisse vestibulum eu turpis et pretium. Cras tincidunt lacinia dui eget malesuada. Maecenas mi sem, feugiat nec interdum ac, dapibus sit amet ante. Aliquam et tellus pharetra, vehicula justo at, luctus velit. Nunc mollis quam non risus molestie feugiat. Maecenas in facilisis nisl, at aliquet tellus.
                        Mauris sed diam rutrum enim feugiat sodales vel in neque. Mauris tempus magna nisl, ultricies eleifend turpis euismod vel?
                    </Typography>
                    <div className={classes.questions}>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/answer.png')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title">Answer 1</Typography>
                                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. </Typography>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/answer.png')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title">Answer 2</Typography>
                                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. </Typography>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/answer.png')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title">Answer 3</Typography>
                                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. </Typography>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/answer.png')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title">Answer 4</Typography>
                                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. </Typography>
                                </Col>
                            </Row>
                        </Paper>
                        <Paper className={classes.question}>
                            <Row>
                                <Col md="2" className={classes.img}>
                                    <img className={classes.img} src={require('../img/answer.png')} />
                                </Col>
                                <Col md={{size: '9', offset: '1'}}>
                                    <Typography variant="title">Answer 5</Typography>
                                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique pharetra pharetra. Maecenas luctus augue nec luctus auctor. Pellentesque tincidunt accumsan eleifend. Aenean posuere libero quis erat vehicula, eu dignissim nisl efficitur. Praesent et risus commodo, luctus elit at, tristique eros. </Typography>
                                </Col>
                            </Row>
                        </Paper>
                    </div>
                </Paper>
            </Col>
        </Row>
    )
}
 export default withStyles(styles)(Question);