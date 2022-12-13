import React, { Component } from 'react'
import Table from './common/table.component'

export default class Student extends Component {
  state = {
    students:[
        {name:"Sahadat Hossen", roll:"522390", phone:"01910922069", cgpa:'3.89'},
        {name:"Afroza Khatun", roll:"344323", phone:"01756603812", cgpa:'3.58'},
        {name:"Hassanuzzaman", roll:"622392", phone:"01910922068", cgpa:'3.55'},
        {name:"Shadhin Hassan", roll:"722397", phone:"01910922065", cgpa:'3.22'},
        {name:"Moniruzzaman Munna", roll:"722397", phone:"01910922065", cgpa:'3.22'},
        {name:"Rahmat Ali", roll:"722397", phone:"01910922065", cgpa:'3.22'},
    ]
  }

  render() {
    const columns = [
        {label:"Name", path:'name', content: item => <td>{item}</td>},
        {label:"Roll", path:'roll', content: item => <td>{item}</td>},
        {label:"Phone", path:'phone', content: item => <td>{item}</td>},
        {label:"cgpa", path:'cgpa', content: item => <td>{item}</td>},
    ]

    return (
        <Table columns={columns} info={this.state.students} />
    )
  }
}
