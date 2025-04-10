
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./stateManagement/store";
import { ThemeProvider } from "@material-tailwind/react";
<<<<<<< HEAD
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./components/i18n/en.json"
import global_es from "./components/i18n/es.json"

i18next.init({
  interpolation: { escapeValue: false},
  lng: "es",
  resources:{
    es: {
      global: global_es,
    

    },
    en:{
      global: global_en,
 

    }

  }
});

=======
>>>>>>> 68a5aec (commit)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 
    <Provider store={store}>
   
      <BrowserRouter> 
        <ThemeProvider>
<<<<<<< HEAD
        <I18nextProvider i18n={i18next}>
        <App />
        </I18nextProvider>
=======
        <App />
>>>>>>> 68a5aec (commit)
       </ThemeProvider>
      </BrowserRouter>
    </Provider>
   
  </React.StrictMode>
)
