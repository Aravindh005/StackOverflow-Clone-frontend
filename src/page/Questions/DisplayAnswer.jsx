import React from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment"
import { useDispatch, useSelector } from "react-redux";
import {deleteAnswer} from "../../actions/question"
import Avatar from "../../components/Avatar/Avatar";
import "./Questions.css"

const DisplayAnswer = ({question,handleShare}) => {

    const User = useSelector((state)=>(state.currentUser));
    const {id} = useParams();
    const dispatch= useDispatch();
    const handleDelete=(answerId, noOfAnswers) =>{
        dispatch(deleteAnswer(id,answerId, noOfAnswers))
    }
    return (
        <div>
            {
                question.answer.map((ans) => (
                    <div className="display-ans" key={ans.id}>
                        <p>{ans.answerBody}</p>
                        <div className="question-actions-user">
                            <div>
                                <button type="button" onClick={handleShare}>share</button>
                            {
                            User?.result?._id === ans?.userId && 
                                (<button type="button" onClick={()=>handleDelete(ans._id, question.noOfAnswers)}>Delete</button>)
                            }
                            </div>
                            <div>
                                <p>Answered {moment(ans.answeredOn).fromNow()}</p>
                                <Link to={`/Users/${ans.userId}`} className="user-link" style={{ color: '#00086d8' }}>
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