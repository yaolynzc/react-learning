import React, { Component } from "react";
import { Table } from "antd";

import "./index.css";

import QueryForm from "./QueryForm";

import { employeeColums } from "./colums";

class Employee extends Component {
  render() {
    return (
      <>
        <div className="toolbar">
          <QueryForm></QueryForm>
        </div>
        <Table columns={employeeColums} className="table"></Table>
      </>
    );
  }
}

export default Employee;
