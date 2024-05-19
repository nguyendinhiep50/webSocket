import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const SendMessagesForm = ({ sendMessage }) => {
  const [msg, setMessages] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(msg);
        setMessages("");
      }}
    >
      <InputGroup className="mb-3">
        <InputGroup.Text>Chat</InputGroup.Text>
        <Form.Control
          onChange={(e) => setMessages(e.target.value)}
          value={msg}
          placeholder="type a mess"
        />
        <Button variant="primary" type="submit" disabled={!msg}>
          Send
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SendMessagesForm;
