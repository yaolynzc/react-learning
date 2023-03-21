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

  render() {
    return (
      <>
        <div className="toolbar">
          <QueryForm onDataChange={this.setEmployee}></QueryForm>
        </div>
          <Table columns={employeeColums} dataSource={this.state.employee} className="table" />
      </>
    );
  }
}

export default Employee;
