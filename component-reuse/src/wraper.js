import React, { Component } from 'react'
import Movies from './components/movie.component'
import Navbar from './components/navbar.component'
import Student from './components/student.component'

export default class Wraper extends Component {
  render() {
    return (
        <React.Fragment>
            <Navbar />
            <div className='container mt-3'>
                <Movies />
                {/* <Student/> */}
            </div>
        </React.Fragment>
    )
  }
}
