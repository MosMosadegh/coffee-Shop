import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Header from './Components/Header/Header';

import './App.css';

function App() {
  let router = useRoutes(routes);
  return (
    <div>
          <Header />
          {router}
    </div>
  );
}

export default App;
