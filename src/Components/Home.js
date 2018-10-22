import React from 'react';
import { Row, Col } from 'reactstrap';

const Home = props => {
    return (
        <Row>
            <Row style={{marginTop: '3rem'}}>
                <Col md="6">
                    <h2 className="text-center">Our logo is</h2>
                    <Row>
                        <Col md="4">
                            <img src={require('../img/logo_1.png')} style={{width: '100%'}}/>
                            <h4>Black variant</h4>
                        </Col>
                        <Col md="4">
                            <img src={require('../img/logo_2.png')} style={{width: '100%', backgroundColor: 'black'}}/>
                            <h4>White variant</h4>
                        </Col>
                        <Col md="4">
                            <img src={require('../img/logo.png')} style={{width: '100%'}}/>
                            <h4>Blue variant</h4>
                        </Col>
                    </Row>
                </Col>
                <Col md="6">
                    <div style={{height: '100%', padding: '50px'}}>
                        Our logo consists of 3 characters, S, A and S, together - Student Assistent System, which represent two students (2 S) who share information, experience and tips with each other for successful assessments and increasing the level of knowledge, which is our mission.
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop: '3rem'}}>
                <Col md="6">
                    <div style={{height: '100%', padding: '50px'}}>
                        Our mission is to increase the general level of knowledge and grades of students and students in our university by creating a virtual assistant, which will include the anility to search for homework on the forum of our resource, as well as chat rooms with their highly respected classmates who can help fatherly
                    </div>
                </Col>
                <Col md="6">
                    <h2 className="text-center">Our mission is</h2>
                    <img src={require('../img/OurMission.png')} style={{width: '100%'}}/>
                </Col>
            </Row>
            <Row style={{marginTop: '3rem'}}>
                <Col md="6">
                    <h2 className="text-center">Our icons</h2>
                    <Row>
                        <Col md="2">
                            <img src={require('../img/books-stack-of-three.png')} style={{width: '70%'}}/>
                        </Col>
                        <Col md="2">
                            <img src={require('../img/businessmen-meeting_1.png')} style={{width: '70%'}}/>
                        </Col>
                        <Col md="2">
                            <img src={require('../img/group-profile-users.png')} style={{width: '70%'}}/>
                        </Col>
                        <Col md="2">
                            <img src={require('../img/speech-bubbles-comment-option.png')} style={{width: '70%'}}/>
                        </Col>
                        <Col md="2">
                            <img src={require('../img/user_1.png')} style={{width: '70%'}}/>
                        </Col>
                        <Col md="2">
                            <img src={require('../img/bookmark-filled-interface-sign.png')} style={{width: '70%'}}/>
                        </Col>
                    </Row>
                </Col>
                <Col md="6">
                    <div style={{height: '100%', padding: '50px'}}>
                        Our icons create an idea of our assistant, because they demonstrate books, the presence of a community on a resource and communication between students in various sizes.
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop: '3rem'}}>
                <Col md="6">
                    <div style={{height: '100%', padding: '50px'}}>
                        Blue color is the most "calm" color for psycho-emotional percepation. In its antiquity, its sooting and positive effects on the psyche were known.
                    </div>
                </Col>
                <Col md="6">
                    <h2 className="text-center">Our Colors and Palette</h2>
                    <Row>
                        <Col md="8">
                            Background color: #FFFFFF
                        </Col>
                        <Col md="4">
                            <span style={{display: 'inline-block', backgroundColor: '#FFFFFD', width: '25px', height: '100%', border: '1px solid #000000'}}></span>
                        </Col>
                    </Row>
                    <Row stlye={{marginBot: '10px'}}>
                        <Col md="8">
                            Main color: #3F51B5
                        </Col>
                        <Col md="4">
                            <span style={{display: 'inline-block', backgroundColor: '#3F51B5', width: '25px', height: '100%', border: '1px solid #000000'}}></span>
                        </Col>
                    </Row>
                    <Row stlye={{marginBot: '10px'}}>
                        <Col md="8">
                            Grad color: #0060A0
                        </Col>
                        <Col md="4">
                            <span style={{display: 'inline-block', backgroundColor: '#0060A0', width: '25px', height: '100%', border: '1px solid #000000'}}></span>
                        </Col>
                    </Row>
                    <Row stlye={{marginBot: '10px'}}>
                        <Col md="8">
                            2 Grad color: #009AFF
                        </Col>
                        <Col md="4">
                            <span style={{display: 'inline-block', backgroundColor: '#009AFF', width: '25px', height: '100%', border: '1px solid #000000'}}></span>
                        </Col>
                    </Row>
                    <Row className="marginBot">
                        <Col md="8">
                            3 Grad color: #03B9EE
                        </Col>
                        <Col md="4">
                            <span style={{display: 'inline-block', backgroundColor: '#03B9EE', width: '25px', height: '100%', border: '1px solid #000000'}}></span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{marginTop: '3rem'}}>
                <Col md="6">
                    <h2 className="text-center">Images</h2>
                    <Row>
                        <Col md="6">
                            <img src={require('../img/main-qimg-d92d977a120dae649f0df76591d725cc-c.jpg')} style={{width: '100%'}}/>
                        </Col>
                        <Col md="6">
                            <img src={require('../img/maxresdefault.jpg')} style={{width: '100%'}}/>
                        </Col>
                    </Row>
                </Col>
                <Col md="6">
                    <div  style={{height: '100%', padding: '70px'}}>
                        Our pictures allow users to easily associate these pictures with country flags, and, accordingly, with the language used.
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop: '3rem'}}>
                <Col md="6">
                    <div style={{height: '100%', padding: '70px'}}>
                        Google font: Roboto Condensed (main font) / sans-serif<br/>
                        link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"
                        Roboto Condensed<br/>
                    </div>
                </Col>
                <Col md="6">
                    <h2>Our fonts</h2>
                    <img src={require('../img/roboto-condensed.png')} style={{width: '100%'}}/>
                </Col>
            </Row>
        </Row>
    )
}

export default Home;