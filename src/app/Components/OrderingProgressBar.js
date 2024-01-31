import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


function OrderingProgressBar(props) {
  const { progressPercentage, statusMessage } = props;

  return <>
    <ProgressBar className="OrderingProgressBar-ProgressBar" now={progressPercentage} label={`${progressPercentage}%`} />
    <p className="OrderingProgressBar-P">{statusMessage}</p>
  </>;
}

export default OrderingProgressBar;