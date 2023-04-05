import React from "react";
import './App.css';
import Header from "./Header";
import MainBody from "./MainBody";
//import InputClasses from "./InputClasses";
//import ViewSchedule from "./ViewSchedule";
//import { BrowserRouter, Routes, Route } from "react-router-dom";


/*
<BrowserRouter>    
        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/view" element={<ViewSchedule />} />
        </Routes>
      </BrowserRouter>
*/
const App = () => {
  return (
    <main>
      <Header/>
      <div className="welcome">
                <h1>your course builder</h1>
      </div>
      <MainBody/>
      
      <div className="footer">
          <h3>special thanks to Adrian Ye for designing our logo!</h3>
      </div>
    </main>
    
  );
};

export default App;