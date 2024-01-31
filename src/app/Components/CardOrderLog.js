import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/CardHeader";
import ProgressLog from "./ProgressLog";

function CardOrderLog(props) {
    const { statusMessages } = props;

    return (
        <CardGroup className="CardOrderLog-CardGroup">
            <Card className="CardOrderLog-Card">
                <CardHeader className="CardOrderLog-CardHeader">Detailed status of your order processing</CardHeader>
                <ProgressLog statusMessages={statusMessages} />
            </Card>
        </CardGroup>
    );
}

export default CardOrderLog;