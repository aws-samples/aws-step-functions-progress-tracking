import React, { useCallback, useEffect, useRef, useState } from "react";
import './App.css';
import WebsocketConnector from "./Components/WebsocketConnector";
import CardOrderProgress from "./Components/CardOrderProgress";
import CardOrderLog from "./Components/CardOrderLog";


function App() {
  const [ws, setWs] = useState();
  const [isConnected, setIsConnected] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [statusMessages, setStatusMessages] = useState(["Your detailed status will appear here"]);
  const [statusMessage, setStatusMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const isProcessingRef = useRef();
  isProcessingRef.current = isProcessing;

  const connectToWs = (event) => {
    event.preventDefault();
    if (event.target.elements.formWebsocketUri.value) {
      const wsUri = event.target.elements.formWebsocketUri.value;
      const newWebsocket = new WebSocket(wsUri);
      setWs(newWebsocket);

      newWebsocket.onopen = () => {
        console.log('WebSocket connection opened');
        setIsConnected(true);
      };

      newWebsocket.onmessage = (event) => {
        console.log('Message received:', event.data);
        const msg = JSON.parse(event.data);
        if (msg && isProcessingRef.current) {
          setProgressPercentage(msg.Progress);
          setStatusMessage(msg.Message);

          if (msg.Progress === 100) {
            setIsProcessing(false);
          }
        }
      };

      newWebsocket.onclose = () => {
        console.log('WebSocket connection closed');
        setIsConnected(false);
      };
    }
  }

  const postOrder = useCallback(
    () => {
      setIsProcessing(true);
      setProgressPercentage(0);
      setStatusMessages([]);
      setStatusMessage("");
      ws.send(JSON.stringify({ action: "onOrder" }));
    }, [ws]
  );

  useEffect(() => {
    if (statusMessage) {
      setStatusMessages([...statusMessages, statusMessage]);
    }
  }, [statusMessage]);

  useEffect(() => {
    if (progressPercentage === 100) {
      setIsProcessing(false);
    }
  }, [progressPercentage]);

  return (
    <div className="App">
      {
        !isConnected ?
          <WebsocketConnector connectToWs={connectToWs} />
          :
          <>
              <CardOrderProgress
                isProcessing={isProcessing}
                postOrder={postOrder}
                progressPercentage={progressPercentage}
                statusMessage={statusMessage} />
              <CardOrderLog statusMessages={statusMessages} />
          </>
      }
    </div>
  );
}

export default App;
