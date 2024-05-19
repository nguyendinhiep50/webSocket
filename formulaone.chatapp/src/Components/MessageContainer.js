const MessageContainer = ({ messages }) => {
  return (
    <div>
      {messages.map((msg) => {
        return (
          <table striped bordered>
            <tr>
              <td>
                {msg.username} - {msg.msg}
              </td>
            </tr>
          </table>
        );
      })}
    </div>
  );
};
export default MessageContainer;
