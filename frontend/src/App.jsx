import React from "react";
import Home from "./Templates/Home";
import MyTite from "./Templates/MyTite";
import SelectFes from "./Templates/SelectFes";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<SelectFes/>}/>
          <Route path="/tite/:id" element={<Home/>} />
          <Route path="/mytite" element={<MyTite/>} />
      </Routes>
    </Router>
  );
}

export default App;
