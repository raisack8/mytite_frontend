import React from "react";
import Home from "./Templates/Home";
import MyTite from "./Templates/MyTite";
import SelectFes from "./Templates/SelectFes";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>


        {/* <div className="p-16"> */}
          <Route exact path="/" element={<SelectFes/>}/>
          <Route path="/tite/:id" element={<Home/>} />
          <Route path="/test" element={<MyTite/>} />
        {/* </div> */}
      </Routes>
    </Router>
  );
}

export default App;
