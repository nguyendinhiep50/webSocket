import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import WaitingRoow from "./Components/waitingroom";
import { useState } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import "react-bootstrap";
import ChatRoom from "./Components/ChatRoom";
function App() {
  const [conn, setConnection] = useState();
  const [messages, setMessages] = useState([]);

  const joinChatRoom = async (username, chatroom) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("https://localhost:7076/Chat")
        .configureLogging(LogLevel.Information)
        .build();
      conn.on("JoinSpecificChatRoom", (username, msg) => {
        console.log("msg: ", msg);
      });

      conn.on("ReceiveSpecificMessage", (username, msg) => {
        console.log(messages);
        setMessages((messages) => [...messages, { username, msg }]);
      });

      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", { username, chatroom });

      setConnection(conn);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async (messages) => {
    try {
      await conn.invoke("SendMessage", messages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <main>
        <Container>
          <Row className="px-5 my-5">
            <Col sm="12">
              <h1 className="font-weight-light">Welcome to ChatApp</h1>
            </Col>
          </Row>
          {!conn ? (
            <WaitingRoow joinChatRoom={joinChatRoom}></WaitingRoow>
          ) : (
            <ChatRoom messages={messages} sendMessage={sendMessage}></ChatRoom>
          )}
        </Container>
      </main>
    </div>
  );
}

export default App;
