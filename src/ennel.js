import React, { Component } from "../../../../.cache/typescript/2.9/node_modules/@types/react";
import EmployeeList from "./EmployeeList"; // Import EmployeeList component

export default class Kennel extends Component {
  render() {
    return (
      <div>
        <h3> Student Kennels </h3> <h4> Nashville North Location </h4>{" "}
        <h5> 500 Puppy Way </h5> <EmployeeList />
      </div>
    );
  }
}
