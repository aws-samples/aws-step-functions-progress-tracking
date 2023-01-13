import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function WebsocketConnector(props) {
    const { connectToWs } = props;

    return (
        <CardGroup className="WebsocketConnector-CardGroup">
            <Card className="WebsocketConnector-Card">
                <Form onSubmit={connectToWs} className="WebsocketConnector-Form">
                    <Form.Group className="mb-3" controlId="formWebsocketUri">
                        <Form.Label className="WebsocketConnector-FormLabel">Enter Websocket URI</Form.Label>
                        <Form.Control type="text" placeholder="Websocket URI" />
                        <Form.Text className="WebsocketConnector-FormText">
                            <p className="WebsocketConnector-P1">Enter your Websocket URI:</p>
                            <p className="WebsocketConnector-P2">wss://API_ID.execute-api.AWS_Region.amazonaws.com/STAGE_NAME'.</p>
                            <p>Find this information in SAM deployment output under key WebSocketURI.</p>
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Connect
                    </Button>
                </Form>
            </Card>
        </CardGroup>
    );
}

export default WebsocketConnector;