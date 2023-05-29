import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import "./Questions.css"

const DisplayAnswer = ({question}) => {
    return (
        <div>
            {
                question.answer.map((ans) => (
                    <div className="display-ans" key={ans.id}>
                        <p>{ans.answerBody}</p>
                        <div className="question-actions-user">
                            <div>
                                <button type="button">share</button>
                                <button type="button">Delete</button>
                            </div>
                            <div>
                                <p>answer {ans.answeredOn}</p>
                                <Link to={`/User/${question.userId}`} className="user-link" style={{ color: '#00086d8' }}>
                                    <Avatar  backgroundColor="green" px="8px" py="5px" style={{}}>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <div>
                                        {ans.userAnswered}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAnswer;