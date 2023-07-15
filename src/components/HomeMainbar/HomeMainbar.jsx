import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"

import "./HomeMainbar.css"

import Questions from "./Questions.jsx";
import { useSelector } from "react-redux";
import QuestionList from "./QuestionList"

const HomeMainbar = () => {

  const location = useLocation();
  const user = 1;
  const questionList =useSelector((state) => (state.questionReducer))
  const navigate = useNavigate();

  


  // var questionList = [{
  //   id: 1,
  //   votes: 3,
  //   questionTitle: "what is a fucnction",
  //   quesionBody: "On this bug report on Github we were asked to raise the issue here. The issue is simple. The user has 2 or more accounts on their phone, let's say xyz@gmail.com and abc@gmail.com. They install an app ... that I broke into OneToMany and ManyToOne relationship. I want to build a form that has checkboxes instead of collection, and I am using the 'DoctrineObject' hydrator, but it does ...",
  //   questionTags: ["c", "css", "express", "firebase"],
  //   usePosted: "Earvin",
  //   askedOn: "jan 1",
  //   views: 14,
  //   noOfAnswers: 823,
  //   userId:1,
  //   answer:[{
  //     answerBody: "Answer" ,
  //     userAnswered: "aravindh",
  //     answeredOn: "jan 2",
  //     userId:2
  //   }]
  // }, {
  //   id: 2,
  //   votes: 3,
  //   questionTitle: "How can I dispatch on traits relating two types, where the second type that co-satisfies the ",
  //   quesionBody: "It meant to be",
  //   questionTags: ["c", "css", "express", "firebase"],
  //   usePosted: "Earvin",
  //   askedOn: "jan 1",
  //   views: 4,
  //   noOfAnswers: 8
  // }, {
  //   id: 3,
  //   votes: 3,
  //   questionTitle: "what is a fucnction",
  //   quesionBody: "It meant to be",
  //   questionTags: ["c", "css", "express", "firebase"],
  //   usePosted: "Earvin",
  //   askedOn: "jan 1",
  //   views: 12,
  //   noOfAnswers: 8
  // }, {
  //   id: 4,
  //   votes: 3,
  //   questionTitle: "Was the origin positioning 'box' removed from Xcode 6?",
  //   quesionBody: "I don't see this tool in Xcode 6. Did they take it out? Can I re-enable it? I use it all the time.",
  //   questionTags: ["c", "css", "express", "firebase"],
  //   usePosted: "Earvin",
  //   askedOn: "jan 1",
  //   views: 12,
  //   noOfAnswers: 8
  // }, {
  //   id: 5,
  //   votes: 3,
  //   questionTitle: "Zend Framework 2 Doctrine 2 one-to-many checkbox hydration",
  //   quesionBody: "I have a ManyToMany that I broke into OneToMany and ManyToOne relationship. I want to build a form that has checkboxes instead of collection, and I am using the 'DoctrineObject' hydrator, but it does ..",
  //   questionTags: ["c", "css", "express", "firebase"],
  //   usePosted: "Earvin",
  //   askedOn: "jan 1",
  //   views: 12,
  //   noOfAnswers: 8
  // }
  // ]


  const redirect = () => {
   if(user === null){
    navigate("/Auth")
   }
   else{
    navigate("/AskQuestion")
   }
    
  }

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>Questions</h1>
        }
        <button className="ask-btn-1" onClick={redirect}>Ask Question</button>
      </div>
      <div>
        {
          questionList.data === null ? <h1>Loading...</h1> :
            <>
              <div className="main-bar-header2">
                <div>
                  <p>{questionList.data.length} questions with no <br />upvoted or accepted answers</p>

                </div>
                <div className="mainbar-header-buttons">
                  <Link to="/New" ><button type="button" className="ask-btn-2" style={{ borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px" }}>New</button></Link>
                  <Link to="/Active" ><button type="button" className="ask-btn-2 ">Active</button></Link>
                  <Link to="/Bountied" ><button type="button" className="ask-btn-2 Bountied">Bountied</button></Link>
                  <Link to="/Unanswered" ><button type="button" className="ask-btn-2 Unanswered">Unanswered</button></Link>

                  <button type="button" className="ask-btn-2" style={{ borderTopRightRadius: "3px", borderBottomRightRadius: "3px" }}>More</button>
                  <button type="button" className="ask-btn-2 filter">Filter</button>
                </div>

              </div>

              <hr style={{ width: "100%", marginLeft: "0" }} />
              <QuestionList questionsList={questionList.data}/>
              {/* {
                questionList.data.map((question) => (
                  <Questions question={question} />
                ))
              } */}
            </>
        }
      </div>

    </div>
  )
}

export default HomeMainbar;