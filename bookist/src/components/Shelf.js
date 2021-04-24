import React, { Component } from 'react'

class Shelf extends Component {
    constructor() {
        super()
        this.state = {
            shelf: []
        }
        this.addToShelf = this.addToShelf.bind(this)
        this.clearShelf = this.clearShelf.bind(this)
    }

    addToShelf = (title) => {
        this.setState({ shelf: [this.state.shelf, title] })
    }

    clearShelf = () => {
        this.setState({ shelf: [] })
    }

    render() {
    let mappedTitles = this.state.shelf.map( title => {
        return <div>{title}</div>
        
    })

        return(
            <div className='shelf'>
                <h1>Your Shelf</h1>
                <button 
                    onClick={this.state.clearShelf}
                    className="clearShelf">
                        clear shelf
                </button>
                { mappedTitles }
            </div>
        )
    }
}

// component that will display a list of the titles that a user clicks
export default Shelf