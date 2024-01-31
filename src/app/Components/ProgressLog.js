import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function ProgressLog(props) {
  const { statusMessages } = props;

  return (
    <Card className="ProgressLog-Card">
      <ListGroup>
        {statusMessages.map((msg, key) => (
          <ListGroup.Item key={key} className="ProgressLog-ListGroupItem">
            {"📦 " + msg}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default ProgressLog;