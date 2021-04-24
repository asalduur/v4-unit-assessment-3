import React, { Component } from 'react'
import Book from './Book'
import data from '../data'

class BookList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: data,
      shelf: []
    }
  }
  render() {
    let mappedBooks = this.state.books.map((book) => {
      return (
            <Book
              onClick = { () => this.props.addToShelf(book.title) }
              key={ book.id }
              book = { book }
            />
      )
    })
    return (
      <div className='library'>
        {mappedBooks}
      </div>
    )
  }
}



// component that will display a list of books
export default BookList 