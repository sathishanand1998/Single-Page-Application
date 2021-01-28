import React from 'react';
import './body.css';
import * as ReactMarkdown from 'react-markdown';


const PostCard = (props) => {
    let { title, content } = props.item;
    return (

        <div className="row ">
            <div className="col-1">
            </div>
            <div className="col-10 card my-1">
                <b> {title}</b>
                <div className="py-1"> <ReactMarkdown source={content} /> </div>

            </div>
        </div>
    )


};
export default PostCard;
