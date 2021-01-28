import React, { useState } from "react";
import "./body.css";
import PostCard from "./postCard";
import * as ReactMarkdown from 'react-markdown';

import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
const Body = (props) => {    //Get postList from postReducer

    //Local state for the input
    const [postTitle, setPostTitle] = useState("");
    //Local state for the input error message
    const [postContent, setPostContent] = useState("");
    const [selectedTab, setSelectedTab] = React.useState("write");


    const [error, setError] = useState({});

    //Handle onChange event
    const handleInput = (addChange, e) => {
        addChange(e.target.value);
    };



    //Handle onClick event
    const addNewPost = () => {
        let errors = {};
        if (!postTitle) {
            errors["postTitle"] = "This field is manidatory";
        }
        if (!postContent) {
            errors["postContent"] = "This field is manidatory";
        }
        setError(errors)
        //Valid input value
        if (postTitle && postContent) {
            let newpostObject = {
                id: Math.random(),
                content: postContent,
                title: postTitle,
            };
            //Add new post item into List with the action
            props.dispatch({ type: "ADD_POST", data: newpostObject });
            //Empty input
            setPostContent("");
            setPostTitle("");
            props.setnewPostShow(false)
            props.setViewPostShow(true);
        }
    };

    return (
        <div className="body scroll-options">
            { props.newpostFlag && <div className="my-3 row">
                <div className="col-md-2"> </div>
                <div className="col-md-8">
                    <div className="form-group">
                        <input
                            type="text"
                            onChange={(e) => handleInput(setPostTitle, e)}
                            name="posttitle"
                            value={postTitle}
                            className={` form-control ${error[`postTitle`] && !postTitle && `error-border`}`}
                            id="posttitle"
                            placeholder="Title"
                        />
                        {error["postTitle"] && !postTitle && <p className="text-danger">{error["postTitle"]}</p>}
                    </div>
                    <div className="form-group bg-color-post">
                        <div className={` ${error[`postContent`] && !postContent && `error-border`}`}>
                            <ReactMde
                                value={postContent}
                                onChange={setPostContent}
                                selectedTab={selectedTab}
                                onTabChange={setSelectedTab}
                                generateMarkdownPreview={(markdown) =>
                                    Promise.resolve(<ReactMarkdown source={markdown} />)
                                }
                                childProps={{
                                    writeButton: {
                                        tabIndex: -1
                                    }
                                }}
                            />
                        </div>
                        {error["postContent"] && !postContent && <p className="text-danger">{error["postContent"]}</p>}
                    </div>
                    <button onClick={addNewPost} className="btn btn-primary">

                        {" "}
            Publish{" "}
                    </button>

                </div>
                <div className="col-md-2"> </div>
            </div>}

            { props.viewPostShow && <div>
                {props.postList && props.postList.length && props.postList.length > 0 ? (
                    <>
                        {props.postList.map((item) => {
                            return <PostCard key={item.id} item={item} />;
                        })}
                    </>
                ) : (
                        <p className="center-align text-center">
                            You don't have any post to show!!!
                        </p>
                    )}
            </div>}
        </div>
    );
};
export default Body;
