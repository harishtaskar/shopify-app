import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const PrimaryButton = (props) => {
  const customPrimaryButton = {
    marginTop: "10px",
    backgroundColor: "#ff0000",
    color: "white",
    fontWeight: 500,
    border: "none",
  };
  return (
    <Button style={customPrimaryButton} variant="primary" type="submit">
      {props.name}
    </Button>
  );
};

export default PrimaryButton;
