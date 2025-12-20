import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assests/font-awesome/css/all.css";
import { AuthProvider } from "./context/AuthContext";
// import { VisitorProvider } from "./context/VisitorContext"; // 👈 ADD THIS
const engine = new Styletron();

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <AuthProvider>
        {/* <VisitorProvider>   */}
        <App />
        {/* </VisitorProvider> */}
      </AuthProvider>
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
