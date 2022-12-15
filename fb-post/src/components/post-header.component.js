import React from "react";

const PostHeader = ({ info }) => {
    return ( 
        <React.Fragment>
            <span className='h2 text-uppercase'>{info.name}</span>
            <button className='float-end mt-2 mx-2 h2 btn btn-outline-secondary' title="Close">X</button>
            <p className='text-muted m-0'>{info.date}</p>
        </React.Fragment>
     );
}
 
export default PostHeader;