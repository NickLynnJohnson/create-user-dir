
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
            stateDB: [],
            searchTerm: null
        };
    }

    componentDidMount() {
        console.log("Start RandomAPI");
        RandomAPI.searchList()
        .then(res => {
            const RandomDB = res.data.results;
            console.log(RandomDB);
            this.setState({
                stateDB: RandomDB
            })
        })
        .catch(err => console.log(err));

    }

    render() {
      console.log("Rendering");
      console.log(JSON.stringify(this.state));
      return (
        <Wrapper>
            <Title></Title>
            {/* <SearchInput onInputChanged={this.foo}></SearchInput> */}
            <TableResults data={this.state.stateDB}/>
        </Wrapper> 
      );
    }
  }
  
  export default App;
