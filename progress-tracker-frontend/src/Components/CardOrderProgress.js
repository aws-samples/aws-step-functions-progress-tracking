import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import OrderingProgressBar from "./OrderingProgressBar";

function CardOrderProgress(props) {
    const { isProcessing, progressPercentage, postOrder, statusMessage } = props;

    return (
        <CardGroup className="CardOrderProgress-CardGroup">
            <Card className="CardOrderProgress-Card">
                <OrderingProgressBar progressPercentage={progressPercentage} statusMessage={statusMessage} />
                <Button className="CardOrderProgress-Button" disabled={isProcessing} onClick={postOrder} variant="primary">Send Order</Button>
            </Card>
        </CardGroup>
    );
}

export default CardOrderProgress;