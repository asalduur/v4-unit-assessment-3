import React from 'react'

const BookList = (props) => {
    const { book } = props
    return (
        <div className='book'>
          <img 
            className='bookImg'
            // onClick = { () => this.props.addToShelf(book.title) }
            src={book.img}
            alt={book.title}
           />
           <div className="bookInfo">
             <p>{book.title}</p>
             <p>{book.author}</p>
           </div>
        </div>
        )
  
  }





export default BookList 