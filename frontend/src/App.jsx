import React from "react";
import Home from "./Templates/Home";
import MyTite from "./Templates/MyTite";
import MyTiteSlot from "./Templates/MyTiteSlot";
import SelectFes from "./Templates/SelectFes";
import Signin from "./Templates/Signin";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SettingBasic from "./SettingPage/SettingBasic";


function App() {

  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<SelectFes/>}/>
          <Route path="/tite/:id" element={<Home/>} />
          <Route path="/mytite/:id" element={<MyTite/>} />
          <Route path="/mytiteslot" element={<MyTiteSlot/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/setting" element={<SettingBasic/>} />
      </Routes>
    </Router>
  );
}

export default App;
