import React, { Component } from 'react'
import './../css/SearchSheet.css'

export default class SearchSheet extends Component {

    constructor(props) {
        super(props)
        this.state = { searchText: '' };
    }

    render() {
        return (
            <div className='search-sheet' onClick={this.props.hideSheet}>
                <div className='search-content' onClick={(e) => e.stopPropagation()}>
                    <input name='search-text' type='text' placeholder='Search profiles ...' value={this.state.searchText} onChange={(e) => this.setState({ searchText: e.target.value })} /> <br></br>
                    
                </div>
            </div>
        )
    }
}
