//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//-----------------------------------------------------------------------

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

const hour = new Date().getHours();
let text = " ";
let style = { color: "black" };

if (hour < 12) {
  text = "Morning";
  style.color = "red";
} else if (hour < 18) {
  text = "Afternoon";
  style.color = "green";
} else {
  text = "Evening";
  style.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={style}>
    Good {text}
  </h1>,
  document.getElementById("root")
);
