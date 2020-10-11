import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function WeatherCard({ data }) {
  const [bgCol, setBgCol] = useState("secondary");
  const [pointerStyle, setPointerStyle] = useState("default");

  function onMouseEnter() {
    setBgCol("primary");
    setPointerStyle("pointer");
  }

  function onMouseLeave() {
    setBgCol("secondary");
    setPointerStyle("default");
  }

  return (
    <Card
      bg={bgCol}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        width: "18rem",
        display: "inline-block",
        cursor: pointerStyle,
      }}
    >
      <Card.Img
        variant="top"
        src={"http://openweathermap.org/img/wn/" + data.icon + "@2x.png"}
      />
      <Card.Body>
        <Card.Title>{data.description}</Card.Title>
        <Card.Text>{data.temp + " | " + data.time}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default WeatherCard;
