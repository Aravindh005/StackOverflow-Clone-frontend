import React from "react";
import { Link } from "react-router-dom";

const Questions = ({ question }) => {
    return (
        <div className="display-question-container">
           
            <div className="display-votes-ans">

                <p>{question.votes} votes</p> 
                <p>{question.noOfAnswers} answers</p>
                <p>{question.views} views</p>

            </div>
            {/* <div className="display-votes-ans">
                <p>{question.noOfAnswers}</p>
                <p>answers</p>
            </div> */}
            <div className="display-question-details">
                <Link style={{textDecoration:"none",fontSize:"17px"}} to={`/Questions/${question.id}`}>{question.questionTitle}</Link>
                <div className="question-body">
                    <p>{question.quesionBody.substring(0, 150)}...</p>
                </div>
                <div className="display-tags-time">
                    <div className="display-tags">
                        {
                            question.questionTags.map((tag) => (
                                <p key={tag}>{tag}</p>
                            ))
                        }
                    </div>
                    <p className="display-time">
                        asked {question.askedOn} {question.userPosted}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Questions;
