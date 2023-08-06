import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Header from "./Components/Header/Header";

import "./App.css";

function App() {
  let router = useRoutes(routes);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{router}</div>
    </div>
  );
}

export default App;
