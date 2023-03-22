import React from "react";
import ReactDOM from "react-dom";
// import Hello from "./components/demo/Hello";
// import HelloClass from "./components/demo/HelloClass";
// import HelloHOC from "./components/demo/HelloHOC";
// import HelloHooks from "./components/HelloHooks";
// import App from "./components/App";
import Root from "./routes";

// mock数据
import "./mock/index";

// const propTemp = { name: "fame", firstName: "l", lastName: "a" };

// ReactDOM.render(
//   <React.StrictMode>
//     <HelloClass {...propTemp} />
//   </React.StrictMode>,
//   document.getElementById("root") as HTMLElement
// );

ReactDOM.render(<Root />, document.getElementById("root"));
