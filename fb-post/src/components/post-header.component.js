import React from "react";

const PostHeader = () => {
    return ( 
        <React.Fragment>
            <span className='h2 text-uppercase'>Md Sahadat Hossen</span>
            <button className='float-end mt-2 mx-2 h2 btn btn-outline-secondary' title="Close">X</button>
            <p className='text-muted m-0'>15 Dec 2022</p>
        </React.Fragment>
     );
}
 
export default PostHeader;