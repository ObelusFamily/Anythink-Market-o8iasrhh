import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
// import { ThemeProvider } from "styled-components"; 
// import GlobalStyle from "./styles/GlobalStyle";
// import theme from "./styles/theme";
=======
>>>>>>> 5ac994e87366a994e49095a8045a129dd38165fe

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
<<<<<<< HEAD
        <App />
=======
      <App />
>>>>>>> 5ac994e87366a994e49095a8045a129dd38165fe
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
