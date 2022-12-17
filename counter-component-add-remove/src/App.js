import React, { Component } from 'react'
import Counters from './counters.component'
import Navbar from './navbar.component'
export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <div className='my-2' style={{ width:'35%', margin:'0 auto' }}>
            <div className='card'>
              <div className='card-body'>
                <Counters/>
              </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
