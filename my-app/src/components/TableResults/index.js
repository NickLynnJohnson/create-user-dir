import React from "react";
import "./style.css";
import Table from 'react-bootstrap/Table';



function TableResults(props) {
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
        {props.data.map((user) =>  {
          return (
            <tr>
              <td><img alt="User's name" src={user.picture.medium}></img></td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
            </tr>
          )
        }
        )}      
      </tbody>
    </Table>
  );
}

export default TableResults;
