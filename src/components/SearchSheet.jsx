import React, { Component } from 'react'
import './../css/SearchSheet.css'
import Profile from './Profile';

export default class SearchSheet extends Component {

    constructor(props) {
        super(props)
        this.state = { profiles: '' };
    }

    // Load profiles after the component mounts
    componentDidMount() {
        this.handleTextChange('');
    }

    render() {
        return (
            <div className='search-sheet' onClick={this.props.hideSheet}>
                <div className='search-content' onClick={(e) => e.stopPropagation()}>
                    <input name='search-text' type='text' placeholder='Search profiles...' onChange={(e) => this.handleTextChange(e.target.value)} /> <br></br>

                    {Array.isArray(this.state.profiles) && this.state.profiles.map((value, index) => {
                        return <Profile key={index} name={value.name} id={value.id} loadSearchedUser={this.props.loadSearchedUser} />
                    })}
                </div>
            </div>
        )
    }

    handleTextChange(text) {
        let url = process.env.REACT_APP_API_URL + '/api/v1/users/find?user=' + text;
        fetch(url, { method: 'POST' })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    profiles: result
                });
            })
    }
}
