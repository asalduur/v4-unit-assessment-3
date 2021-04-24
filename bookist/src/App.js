import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import BookList from './components/BookList'
import Shelf from './components/Shelf'

class App extends Component {
  constructor() {
    super()
    this.state = {
        shelf: []
    }
  }
  


  // reset()
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <div className="content">
          <BookList />
          <Shelf />
        </div>
      </div>
    )
  }    
}

// main component, will display other components as children
export default App;
