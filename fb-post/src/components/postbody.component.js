import React from 'react';

const PostBody = () => {
    return ( 
        <React.Fragment>
            <p>একবার এক পর্যটক মেক্সিকোয় গেলেন; জেলেদের মাছের খুব প্রশংসা করলেন। তারপর বললেন,
                “আচ্ছা, মাছ ধরতে আপনাদের কত সময় লাগে?”
                “বেশিক্ষণ না” জেলেদের এক কথার উত্তর।
                “তাহলে আপনারা আরও বেশি সময় দিয়ে আরও বেশি মাছ ধরেন না কেন?” লোকটা  
                ... <a href='#' className='text-link'>See more</a></p>
            <img src={ require('../IMG_20220624_184819.jpg')} alt="post Image" className='img-fluid'/>
        </React.Fragment>
     );
}
 
export default PostBody;