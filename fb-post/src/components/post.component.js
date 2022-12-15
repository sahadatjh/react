import React, { Component } from 'react';
import Comment from './comment.component';
import PostHeader from './post-header.component';
import PostBody from './postbody.component';

export default class Post extends Component {
  render() {
    const { info } = this.props;
    return (
        <div className='card mb-3'>
            <div className='card-header'>
                <PostHeader info={info}/>
            </div>
            <div className='card-body'>
                <PostBody info={info}/>
            </div>
            <div className='card-footer'>
                <Comment info={info}/>
            </div>
        </div>
    )
  }
}
