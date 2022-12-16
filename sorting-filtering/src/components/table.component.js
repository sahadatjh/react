import React, { Component } from 'react'
import TableBody from './table-body.component'
import TableHeader from './table-header.component'

export default class Table extends Component {
  render() {
    return (
      <div className='table-responsive'>
        <table className='table table-striped table-hover table-bordered'>
            <TableHeader/>
            <TableBody/>
        </table>
      </div>
    )
  }
}
