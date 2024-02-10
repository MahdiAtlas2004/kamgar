import React from "react";
import ReactDom from "react-dom/client";

import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./index.css";

const container = document.getElementById('root');
const root = ReactDom.createRoot(container);
root.render(<App />);
