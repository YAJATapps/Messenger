import React, { Component } from 'react'
import './../css/MessageMenu.css';
import MessageProfile from './MessageProfile';
import SearchSheet from './SearchSheet';

// The list of persons to message
export default class MessageMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { profiles: '', searchOpen: false };

        this.loadSearchedUser = this.loadSearchedUser.bind(this);

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
                    this.state.searchOpen && <SearchSheet hideSheet={() => this.setState({ searchOpen: false })} loadSearchedUser={this.loadSearchedUser} />
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
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    profiles: result
                });
            })
    }

    loadSearchedUser(sid, sName) {
        this.setState({ searchOpen: false });

        let exist = false;
        if (Array.isArray(this.state.profiles)) {
            for (let x in this.state.profiles) {
                if (x.id === sid) {
                    exist = true;
                    break;
                }
            }
        }

        if (!exist) {
            this.setState(prevState => ({
                profiles: [...prevState.profiles, { 'id': sid, 'name': sName }]
            }))
        }

        this.props.clickAt([sid, sName]);
    }
}
