import React from "react";
import "./AskQuestion.css"


const AskQuestions = () => {

    return (

        <div className="ask-questions">
<div className="ask-ques-container">
            <h1>Ask a public question</h1>
            
                
                    <form>
                        <div className="ask-form-container">
                            <div className="each-label">
                                <label htmlFor="ask-ques-title">
                                    <h4>Title</h4>
                                    <p>Be specific and imagine you’re asking a question to another person.</p>
                                    <input type="text" id="ask-ques-title" placeholder=""></input>
                                </label>  </div>
                            <div className="each-label">
                                <label htmlFor="ask-ques-body">
                                    <h4>What are the details of your problem?</h4>
                                    <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                                    <textarea name="" id="ask-ques-body" cols="50" rows="10"></textarea>
                                </label> </div>
                            <div className="each-label">
                                <label htmlFor="ask-ques-result">
                                    <h4>What did you try and what were you expecting?</h4>
                                    <p>Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.</p>
                                    <input type="text" id="ask-ques-result" placeholder=""></input>
                                </label> </div>
                            <div className="each-label">
                                <label htmlFor="ask-ques-tags">
                                    <h4>Tags</h4>
                                    <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                                    <input type="text" id="ask-ques-tags" placeholder=""></input>
                                </label>  </div>
                        </div>
                        <button type="submit" value="review ur question" className="review-btn">Review ur question</button>
                    </form>
                
               
            </div>


        </div>
    )
}

export default AskQuestions;
