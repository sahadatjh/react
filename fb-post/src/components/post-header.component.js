import React from "react";

const PostHeader = ({ info, handleRemove }) => {
    return ( 
        <React.Fragment>
            <span className='h4 text-uppercase'>{info.title}</span>
            <button className='float-end mt-2 mx-2 h2 btn btn-outline-danger' title="Delete this post." onClick={ () => handleRemove(info.id)}><i className="bi bi-trash"></i></button>
            <p className='text-muted m-0'>{info.date}</p>
        </React.Fragment>
     );
}
 
export default PostHeader;