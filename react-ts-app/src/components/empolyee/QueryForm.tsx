import React, { Component } from "react";
import { Form, Input, Select, Button } from "antd";

import { EmployeeRequest } from "../../interface/employee";

import { get } from "../../utils/request";
import { GET_EMPLOYEE_URL } from "../../constants/urls";

const { Option } = Select;

class QueryForm extends Component<{}, EmployeeRequest> {
  state: EmployeeRequest = {
    name: "",
    departmentId: undefined,
  };

  handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ name: e.currentTarget.value });
  };

  handleDepartmentChange = (value: number) => {
    this.setState({
      departmentId: value,
    });
  };

  queryEmployee = (param: EmployeeRequest) => {
    console.log(param);
    get(GET_EMPLOYEE_URL, param).then((response) => {});
  };

  handleSubmit = () => {
    this.queryEmployee(this.state);
  };

  componentDidMount(): void {
    this.queryEmployee(this.state);
  }

  render() {
    return (
      <Form layout="inline">
        <Form.Item>
          <Input
            placeholder="姓名"
            style={{ width: 120 }}
            allowClear
            value={this.state.name}
            onChange={this.handleNameChange}
          ></Input>
        </Form.Item>
        <Form.Item>
          <Select
            placeholder="部门"
            style={{ width: 120 }}
            allowClear
            value={this.state.departmentId}
            onChange={this.handleDepartmentChange}
          >
            <Option value={1}>技术部</Option>
            <Option value={2}>产品部</Option>
            <Option value={3}>市场部</Option>
            <Option value={4}>运营部</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.handleSubmit}>
            查询
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default QueryForm;
