import React, { Component } from "react";
import { Table } from "antd";

import "./index.css";

import QueryForm from "./QueryForm";

import { employeeColums } from "./colums";
import { EmployeeResponse } from '../../interface/employee';

interface State {
    employee: EmployeeResponse
}

class Employee extends Component<{}, State> {
  state: State = {
    employee: undefined
  }
  setEmployee = (employee: EmployeeResponse) => {
    this.setState({
      employee,
    });
  };

  getTotal = () => {
    let total:number = 0
    if(typeof this.state.employee !== 'undefined') {
      total = this.state.employee.length
    }
    return <p>共有{total}员工</p>
  }

  render() {
    return (
      <>
        <div className="toolbar">
          <QueryForm onDataChange={this.setEmployee}></QueryForm>
          {this.getTotal()}
        </div>
          <Table columns={employeeColums} dataSource={this.state.employee} className="table" />
      </>
    );
  }
}

export default Employee;
