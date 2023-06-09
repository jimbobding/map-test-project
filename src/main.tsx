import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM from 'react-dom'
import App from "./App.tsx";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./store/rootReducer";
// import App from "./App";

// // Create the Redux store
// const store = configureStore({
//   reducer: rootReducer,
// });

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
