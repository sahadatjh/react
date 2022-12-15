import React, { Component } from 'react';
import Like from "./like.component";

const Comment = ({ info, handleToggleClick }) => {
    return ( 
        <React.Fragment>
            <div className='row'>
                <div className='col-11'>
                    <input type="text" className="form-control" placeholder="Leave Your Comment....."/>
                </div>
                <div className='col-1'>
                    <Like info={info} handleToggleClick={handleToggleClick}/>
                </div>
            </div>
        </React.Fragment>

     );
}
 
export default Comment;