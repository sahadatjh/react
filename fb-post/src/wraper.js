import React, { Component } from 'react';
import Comment from './components/comment.component';
import Navbar from './components/navbar.component';

export default class Wraper extends Component {
  render() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className='m-auto mt-3' style={{ maxWidth:'700px', }}>
                <div className='card'>
                    <div className='card-header'>
                        <span className='h2 text-uppercase'>Md Sahadat Hossen</span>
                        <button className='float-end mt-2 mx-2 h2 btn btn-outline-secondary' title="Close">X</button>
                        <p className='text-muted m-0'>15 Dec 2022</p>
                    </div>
                    <div className='card-body'>
                        <p>একবার এক পর্যটক মেক্সিকোয় গেলেন; জেলেদের মাছের খুব প্রশংসা করলেন। তারপর বললেন,
                            “আচ্ছা, মাছ ধরতে আপনাদের কত সময় লাগে?”
                            “বেশিক্ষণ না” জেলেদের এক কথার উত্তর।
                            “তাহলে আপনারা আরও বেশি সময় দিয়ে আরও বেশি মাছ ধরেন না কেন?” লোকটা  
                            ... <a className='text-link'>See more</a></p>
                        <img src={ require('./IMG_20220624_184819.jpg')} alt="post Image" className='img-fluid'/>
                    </div>
                    <div className='card-footer'>
                        <Comment/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
  }
}
