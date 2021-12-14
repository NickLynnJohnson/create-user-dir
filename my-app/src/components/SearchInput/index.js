import React from "react";
import "./style.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function SearchInput(props) {
  return ( 
    <Form>
      <Form.Label>Name Search</Form.Label>
      <Form.Control type="text" placeholder="Enter name" onChange={props.searchTheTerm}/>
      <Form.Text className="text-muted">Search by First Name</Form.Text>    
    </Form>
  );
}

export default SearchInput;