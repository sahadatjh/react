import React, { Component } from 'react';
import Like from "./like.component";

const Comment = () => {
    return ( 
        <React.Fragment>
            <div className='row'>
                <div className='col-11'>
                    <input type="text" className="form-control" placeholder="Leave Your Comment....."/>
                </div>
                <div className='col-1'>
                    <Like />
                </div>
            </div>
        </React.Fragment>

     );
}
 
export default Comment;