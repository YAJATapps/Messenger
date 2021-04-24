import React, { Component } from 'react'
import './../css/MessageMenu.css';
import MessageProfile from './MessageProfile';
import SearchSheet from './SearchSheet';

// The list of persons to message
export default class MessageMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { profiles: '', searchOpen: false };
    }

    // Load profiles after the component mounts
    componentDidMount() {
        this.loadProfiles();
    }

    componentDidUpdate(prevProps) {
        if (this.props.uid !== prevProps.uid) {
            this.loadProfiles();
        }
    }

    render() {
        return (
            <div className='messageMenu'>
                <div className='searchbox' onClick={() => this.setState({ searchOpen: true })}>
                    <h4>Search profiles</h4>
                </div>
                {
                    this.state.searchOpen && <SearchSheet hideSheet={() => this.setState({ searchOpen: false })} />
                }
                {Array.isArray(this.state.profiles) && this.state.profiles.map((value, index) => {
                    return <MessageProfile key={index} name={value.name} id={value.id} clickAt={this.props.clickAt} />
                })}
            </div>
        )
    }

    // Fetch the profiles from API and load it into profiles state
    loadProfiles() {
        let url = process.env.REACT_APP_API_URL + '/api/v1/users/contacts?user=' + this.props.uid;
        fetch(url, { method: 'POST' })
            .then(res => this.checkError(res))
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    profiles: result
                });
            })
            .catch(error => console.log(error));
    }

    checkError(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
}
