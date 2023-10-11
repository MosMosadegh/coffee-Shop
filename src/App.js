import React, { useState } from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Header from "./Components/Header/Header";
import productContext from './Components/Context/ProductsContext'
import productsData from "./Data/productsData";
import blogData from './Data/blogData'
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  const [allProduct, setAllProduct] = useState(productsData);
  const [allBlogs, setAllBlogs] = useState(blogData);

  let router = useRoutes(routes);
  return (
    <div>
      <productContext.Provider value={{
        allProduct,
        allBlogs
        }}>

      
      <Header />
      <div>{router}</div>
      <Footer/>
      </productContext.Provider>
    </div>
  );
}

export default App;
