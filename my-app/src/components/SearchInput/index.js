import React from "react";
import "./style.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function SearchInput(props) {
  props.onInputChanged("foo");
  return (
    <Form>
      <Form.Control type="text" placeholder="First Name" />
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export default SearchInput;
