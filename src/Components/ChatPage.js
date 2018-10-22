import React from 'react';
import ChatsList from './ChatsList';
import Chat from './Chat';
import { Row, Col } from 'reactstrap';

const ChatPage = (props) => {
    return (
        <Row>
            <Col md="4">
                <ChatsList />
            </Col>
            <Col md="8">
                <Chat />
            </Col>
        </Row>
    )
}

export default ChatPage;