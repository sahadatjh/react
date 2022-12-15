import React from 'react';

const PostBody = ({ info }) => {
    return ( 
        <React.Fragment>
            <p>{ info.txt }... <a href='#' className='text-link'>See more</a></p>
            <img src={ require('../post-images/'+info.pic)} alt="post Image" className='img-fluid'/>

        </React.Fragment>
     );
}
 
export default PostBody;