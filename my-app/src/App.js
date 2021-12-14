
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
            searchedStateDB: []
        };
    }

    componentDidMount() {
        console.log("Start RandomAPI");
        RandomAPI.searchList()
        .then(res => {
            const RandomDB = res.data.results;
            console.log(RandomDB);
            this.setState({
                stateDB: RandomDB,

                // On default make the updated DB start as the originalDB so that the list shows up correctly when the page first loads
                searchedStateDB: RandomDB
            })
        })
        .catch(err => console.log(err));
    }

    // call back function for user search entry
    searchTheTerm(event) {
        // capture the user entry from the form
        let searchedTerm = event.target.value;

        // have already pulled in the original DB set in the App
        const originalDB = this.state.stateDB;

        // have a new DB that will eventually become the filtered version of the original based on the user entry
        const newSearchedDB = [];

        // this says: look at the original DB, if any value in the list matches the searched Term, push it into a new DB which will be used to update the search results display
        originalDB.filter(user => {
            if (user.name.first === searchedTerm) {
                newSearchedDB.push(user)
            }
            return newSearchedDB;
        })

        // take this new DB and update the parent DB
        this.setState({
            searchedStateDB: newSearchedDB
        });
    }

    render() {
      console.log("Rendering");
      console.log(JSON.stringify(this.state));
      return (
        <Wrapper>
            <Title></Title>
            <SearchInput searchTheTerm={this.searchTheTerm}></SearchInput>
            <TableResults data={this.state.searchedStateDB}/>
        </Wrapper> 
      );
    }
  }
  
  export default App;
