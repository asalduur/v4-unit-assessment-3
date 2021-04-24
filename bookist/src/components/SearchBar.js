import React, { Component } from 'react'

class SearchBar extends Component{
    constructor() {
        super()
        this.state = {
            userInput: ''
        }
    }

    // filterBooks = (input) => {

    // }
    render() {
        return (
            <div className='searchBar'>
                <input className='textArea' />
                <button>search</button>
                <button>clear search</button>
            </div>
        )
    }
}



// component that can be used to search the book's titles and authors
export default SearchBar