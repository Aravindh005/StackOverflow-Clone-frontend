import React from "react";
import "./Questions.css"
import { Link, useParams } from "react-router-dom";
import upVote from "../../ass/sort-up-solid.svg"
import downVote from "../../ass/sort-down-solid.svg"
import Avatar from "../../components/Avatar/Avatar"
import DisplayAnswer from "./DisplayAnswer"


const QuesDetailsDisplay = () => {

  const { id } = useParams();
  console.log(id);

  var questionList = [{
    _id: '1',
    votes: 3,
    upVotes: 5,
    downVotes: 9,
    questionTitle: "what is a fucnction",
    quesionBody: "On this bug report on Github we were asked to raise the issue here. The issue is simple. The user has 2 or more accounts on their phone, let's say xyz@gmail.com and abc@gmail.com. They install an app ... that I broke into OneToMany and ManyToOne relationship. I want to build a form that has checkboxes instead of collection, and I am using the 'DoctrineObject' hydrator, but it does ...",
    questionTags: ["c", "css", "express", "firebase"],
    usePosted: "Earvin",
    askedOn: "jan 1",
    views: 14,
    noOfAnswers: 823,
    userId: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: "aravindh",
      answeredOn: "jan 2",
      userId: 2
    }]
  }, {
    _id: '2',
    votes: 3,
    upVotes: 5,
    downVotes: 9,
    questionTitle: "How can I dispatch on traits relating two types, where the second type that co-satisfies the ",
    quesionBody: "It meant to be",
    questionTags: ["c", "css", "express", "firebase"],
    usePosted: "Earvin",
    askedOn: "jan 1",
    views: 4,
    noOfAnswers: 8,
    userId: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: "aravindh",
      answeredOn: "jan 2",
      userId: 2
    }]
  }, {
    _id: '3',
    votes: 3,
    upVotes: 5,
    downVotes: 9,
    questionTitle: "what is a fucnction",
    quesionBody: "It meant to be",
    questionTags: ["c", "css", "express", "firebase"],
    usePosted: "Earvin",
    askedOn: "jan 1",
    views: 12,
    noOfAnswers: 8,
    userId: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: "aravindh",
      answeredOn: "jan 2",
      userId: 2
    }]
  }, {
    _id: '4',
    votes: 3,
    upVotes: 5,
    downVotes: 9,
    questionTitle: "Was the origin positioning 'box' removed from Xcode 6?",
    quesionBody: "I don't see this tool in Xcode 6. Did they take it out? Can I re-enable it? I use it all the time.",
    questionTags: ["c", "css", "express", "firebase"],
    usePosted: "Earvin",
    askedOn: "jan 1",
    views: 12,
    noOfAnswers: 8,
    userId: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: "aravindh",
      answeredOn: "jan 2",
      userId: 2
    }]
  }, {
    _id: '5',
    votes: 3,
    upVotes: 5,
    downVotes: 9,
    questionTitle: "Zend Framework 2 Doctrine 2 one-to-many checkbox hydration",
    quesionBody: "I have a ManyToMany that I broke into OneToMany and ManyToOne relationship. I want to build a form that has checkboxes instead of collection, and I am using the 'DoctrineObject' hydrator, but it does ..",
    questionTags: ["c", "css", "express", "firebase"],
    usePosted: "Earvin",
    askedOn: "jan 1",
    views: 12,
    noOfAnswers: 8,
    userId: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: "aravindh",
      answeredOn: "jan 2",
      userId: 2
    }]
  }
  ]

  return (
    <div className="question-details-page">
      {
        questionList === null ?
          <h1> loading..</h1> :
          <>
            {
              questionList.filter((question) => question._id === id).map((question) => {
                return (
                  <div key={question._id}>
                    <section className="ques-details-conatiner">
                      <h1>{question.questionTitle}</h1>
                      <div className="ques-details-container-2">
                        <div className="ques-votes">
                          <img src={upVote} alt="" width="18px" />
                          <p>{question.upVotes - question.downVotes}</p>
                          <img src={downVote} alt="" width="18px" />
                        </div>
                        <div style={{ width: "100%" }}>
                          <p className="question-body">{question.quesionBody}</p>
                          <div className="question-details-tags">
                            {
                              question.questionTags.map((tag) => (
                                <p key={tag}>{tag}</p>
                              ))
                            }
                          </div> 
                          <div className="question-action-user">
                            <button type="button" >Share</button>
                            <button type="button" >Delete</button>
                          </div>
                          <div >
                            <p>asked {question.askedOn}</p>
                            <Link to={`/User/${question.userId}`} className="user-link" style={{ color: '#00086d8' }}>
                              <Avatar backgroundColor="orange" px="8px" py="5px" style={{}}>{question.usePosted.charAt(0).toUpperCase()}</Avatar>
                              <div>
                                {question.usePosted}
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </section>
                    {
                      question.noOfAnswers !==0 && (
                        <section>
                          <h3>{question.noOfAnswers} answers</h3>
                          <DisplayAnswer key={question._id} question={question}></DisplayAnswer>
                        </section>
                      )
                    }
                    <section className="post-ans-container">
                        <h3>Your Answer</h3>
                        <form>
                          <textarea name="" id="" cols="30" rows="10"></textarea> <br />
                          <input type="submit" className="post-ans-btn" />
                        </form>
                        <p>
                          Browse other question tagged
                          {
                            question.questionTags.map((tag) => (
                              <Link to="/Tags" key={tag} className="ans-tags">{tag}</Link>
                            ))
                          } or 
                          <Link to="/AskQuestion" style={{textDecoration:"none", color:"#009dff"}}> Ask your question</Link>
                        </p>
                    </section>
                  </div>
                )
              })
            }
          </>
      }


    </div>
  )
}

export default QuesDetailsDisplay;
