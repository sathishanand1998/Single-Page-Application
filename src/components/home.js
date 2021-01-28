import React, { useState, useReducer, useEffect } from "react";
import './body.css';
import Header from './header';
import Body from './body';
import reducer, { initialState } from '../reducers/reducer'



const Home = (props) => {
    //Use for all the dispatch actions
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newPostShow, setnewPostShow] = useState(false);
    const [viewPostShow, setViewPostShow] = useState(true);
    const [modifiedPostList, setmodifiedPostList] = useState(state.postList);

    useEffect(() => {
        setmodifiedPostList(state.postList)
    }, [state.postList]);

    return (

        <div className="container-fluid">
            <Header newpostFlag={newPostShow} setViewPostShow={setViewPostShow} setnewPostShow={setnewPostShow} postList={state.postList} setmodifiedPostList={setmodifiedPostList} />
            <Body dispatch={dispatch} setnewPostShow={setnewPostShow} viewPostShow={viewPostShow} setViewPostShow={setViewPostShow} newpostFlag={newPostShow} postList={modifiedPostList} />
        </div>
    )


};
export default Home;
