import React, { Component } from 'react'
import Table from './table.component'

export default class Wraper extends Component {
  render() {
    return (
        <div className='container my-2'>
            <Table/>
        </div>
    )
  }
}
