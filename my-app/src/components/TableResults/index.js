import React from "react";
import "./style.css";
import Table from 'react-bootstrap/Table';



function TableResults() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Placeholder</td>
          <td>Nick</td>
          <td>Johnson</td>
          <td>555-555-5555</td>
          <td>email@email.com</td>
        </tr>
        <tr>
          <td>Placeholder</td>
          <td>Nick</td>
          <td>Johnson</td>
          <td>555-555-5555</td>
          <td>email@email.com</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableResults;
