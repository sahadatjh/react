import React, { Component } from 'react';
import Dislike from './dislike.component';
import Like from "./like.component";

const Comment = ({ info, handleLike, handleDislike }) => {
    return ( 
        <React.Fragment>
            <div className='row'>
                <div className='col-10'>
                    <input type="text" className="form-control" placeholder="Leave Your Comment....."/>
                </div>
                <div className='col-2'>
                    <Like info={info} handleLike={handleLike}/>
                    <Dislike info={info} handleDislike={handleDislike}/>
                </div>
            </div>
        </React.Fragment>

     );
}
 
export default Comment;