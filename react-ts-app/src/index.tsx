import React from "react";
import ReactDOM from "react-dom";
// import Hello from "./components/demo/Hello";
import HelloClass from "./components/demo/HelloClass";

const propTemp = { name: "fame", firstName: "l", lastName: "a" };

ReactDOM.render(
  <React.StrictMode>
    <HelloClass {...propTemp} />
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
