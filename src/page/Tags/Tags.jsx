import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import TagList from "./TagList"
import "./Tags.css"
const Tags= ()=>{
    const tagsList=[
        {
            id:1,
            tagName:"Html",
            tagDesc:"html This email was intended for Aravindh Shanmugam (MERN-Stack Web Developer - React.js | Node.js | Express.js | MongoDB)"
        },
        {
            id:1,
            tagName:"Html",
            tagDesc:"html This email was intended for Aravindh Shanmugam (MERN-Stack Web Developer - React.js | Node.js | Express.js | MongoDB)"
        },
        {
            id:1,
            tagName:"Html",
            tagDesc:"html This email was intended for Aravindh Shanmugam (MERN-Stack Web Developer - React.js | Node.js | Express.js | MongoDB)"
        },
        {
            id:1,
            tagName:"Html",
            tagDesc:"html This email was intended for Aravindh Shanmugam (MERN-Stack Web Developer - React.js | Node.js | Express.js | MongoDB)"
        },
        {
            id:1,
            tagName:"Html",
            tagDesc:"html This email was intended for Aravindh Shanmugam (MERN-Stack Web Developer - React.js | Node.js | Express.js | MongoDB)"
        }
    ]
    return(
        <div className="home-container-1">
           <LeftSidebar></LeftSidebar>
           <div className="home-container-2">
           <h1 className="tag-h1">Tags</h1>

               <p className="tag-p">A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>  
               <div className="tags-list-container">
                 {
                    tagsList.map((tag) =>(
                     <TagList tag={tag} key={tagsList.id}/>
                 ))
                 }
               </div>      
           </div>
        </div>
    )
}

export default Tags