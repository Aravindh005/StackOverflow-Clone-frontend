import React from "react";

import {Routes, Route} from "react-router-dom"

import Home from "./page/Home/Home"
import Auth from "./page/Auth/Auth"
import Questions from "./page/Questions/Questions.jsx"
import AskQuestions from "./page/AskQuestion/AskQuestion.jsx";
import DisplayQuestions from "./page/Questions/DisplayQuestions";

const AllRoutes= ()=>{
   return <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    
    <Route exact path="/Auth" element={<Auth />}></Route>
    <Route exact path="/Questions" element={<Questions/>}></Route>
    <Route exact path="/AskQuestion" element={<AskQuestions/>}></Route>
    <Route exact path="/Questions/:id" element={<DisplayQuestions/>}></Route>

   </Routes>
}

export default AllRoutes;