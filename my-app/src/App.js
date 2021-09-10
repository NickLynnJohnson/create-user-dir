
import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SearchInput from "./components/SearchInput";
import TableResults from "./components/TableResults";
import RandomAPI from './api/api';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateDB: null,
            searchTerm: null
        };
    }

    componentDidMount() {
        const randomDB = RandomAPI();
        console.log("ComponentDidMount");
        console.log(JSON.stringify(randomDB));
        this.setState({
            stateDB: randomDB
        });
    }

    // foo(inputString) {
    //     console.log(inputString);
    //     this.setState({
    //         searchTerm: inputString,
    //     });
    // }

    render() {
      console.log("Rendering");
      console.log(JSON.stringify(this.state));
      return (
        <Wrapper>
            <Title></Title>
            {/* <SearchInput onInputChanged={this.foo}></SearchInput> */}
            <TableResults></TableResults>
        </Wrapper> 
      );
    }
  }
  
  export default App;
