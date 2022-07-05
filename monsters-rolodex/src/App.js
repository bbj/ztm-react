import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
class App extends Component {
  constructor(props) {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
    //console.log("constuctor");
  }

  //called the first time the component is placed into the DOM
  componentDidMount() {
    //console.log("componentDidMount");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return { monsters: users }
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchField };
      }
    );
  }

  render() {
    //console.log("render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(
      (monster) => {
        return monster.name.toLocaleLowerCase().includes(
          searchField
        );
      }
    );

    return (
      <div className="App" >
        <SearchBox
          className='search-box'
          onChangeHandler={onSearchChange}
          placeholder="search the monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;