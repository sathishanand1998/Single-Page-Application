import React, { useState } from "react";
import './header.css';


const Header = (props) => {
    //Local state for the input error message

    const [searchValue, setSearchValue] = useState("");

    let showHideNewPost = () => {
        props.setnewPostShow(!props.newpostFlag)
    }
    let handleOnChange = (e) => {
        setSearchValue(e.target.value)

    }

    let modifyPostList = () => {
        let newPost = props.postList.filter((data) => {
            if (searchValue) {
                if (data.title.toLowerCase().includes(searchValue.toLowerCase()) || data.content.toLowerCase().includes(searchValue.toLowerCase())) {
                    return data
                }

            }
        })
        props.setmodifiedPostList(newPost)

    }
    let clearSearchValue = () => {
        setSearchValue('')
        props.setmodifiedPostList(props.postList)
    }


    return (
        <>
            <div className='header'>
                <div className='row'>
                    <div className='col-md-12 d-flex justify-content-center'>
                        <div className="input-group w-50 my-3">
                            <button onClick={modifyPostList} Name="btn bg-transparent search-box-alignment" className="searchicon">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                            <input type="text" value={searchValue} onChange={handleOnChange} className="form-control input-alignment" placeholder="    Search..." />
                            <button onClick={clearSearchValue} className="btn bg-transparent input-box-alignment" >
                                <i onClick={clearSearchValue} className="fa fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row  d-flex justify-content-center' >
                    <div className="col-md-5"> <button onClick={showHideNewPost} className=' float-right btn btn-secondary w-50'>New Post</button></div>
                    <div className=" col-md-5 offset-sm-2" > <button onClick={showHideNewPost} className='btn btn-secondary w-50'>Published</button></div>
                </div>
            </div>
        </>
    )
};
export default Header;
