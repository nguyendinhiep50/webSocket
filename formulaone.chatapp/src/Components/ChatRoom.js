import { Col, Row } from "react-bootstrap";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";
import { useEffect, useState } from "react";

const ChatRoom = ({ messages, sendMessage }) => {
  const [formChat, setFormChat] = useState([]);

  return (
    <div>
      <Row className="px-5 py-5">
        <Col s={10}>
          <h2>ChatRoom</h2>
        </Col>
        <Col></Col>
      </Row>
      <Row className="px-5 py-5">
        <Col sm={12}>
          <MessageContainer messages={messages} />
        </Col>
        <Col sm={12}>
          <SendMessageForm sendMessage={sendMessage} />
        </Col>
      </Row>
    </div>
  );
};

export default ChatRoom;
