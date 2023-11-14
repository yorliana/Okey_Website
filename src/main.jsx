
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./stateManagement/store";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 
    <Provider store={store}>
   
      <BrowserRouter> 
        <ThemeProvider>
        <App />
       </ThemeProvider>
      </BrowserRouter>
    </Provider>
   
  </React.StrictMode>
)
