import React, { Component } from 'react';
import Navbar from './components/navbar.component';
import Post from './components/post.component';

export default class Wraper extends Component {
  render() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className='m-auto mt-3' style={{ maxWidth:'700px', }}>
                <Post />
                <Post />
            </div>
        </React.Fragment>
    )
  }
}
