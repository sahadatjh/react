import React, { Component } from 'react'
import Student from './components/student.component'

export default class Wraper extends Component {
  render() {
    return (
        <div className='container'>

            <Student/>
        </div>
    )
  }
}
