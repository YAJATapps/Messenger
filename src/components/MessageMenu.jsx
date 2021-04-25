import React, { Component } from 'react'
import './../css/MessageMenu.css';
import MessageProfile from './MessageProfile';
import SearchSheet from './SearchSheet';

// The list of persons to message
export default class MessageMenu extends Component {

    constructor(props) {
        super(props);

        // The profiles state contains the object with name and id of users in list, searchOpen is bool whether search sheet is open
        this.state = {
            profiles: '',
            searchOpen: false
        };

        // Bind the method
        this.loadSearchedUser = this.loadSearchedUser.bind(this);
    }

    // Load profiles after the component mounts
    componentDidMount() {
        this.loadProfiles();
    }

    // Update profiles if the uid has changed
    componentDidUpdate(prevProps) {
        if (this.props.uid !== prevProps.uid) {
            this.loadProfiles();
        }
    }

    // Render this component
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
                    return <MessageProfile key={index} name={value.name} id={value.id} selectProfile={this.props.selectProfile} />
                })}
            </div>
        )
    }

    // Fetch the profiles from API and load it into profiles state
    loadProfiles() {
        // Url to get the object with user and id of the users that the person had contacted
        let url = process.env.REACT_APP_API_URL + '/api/v1/users/contacts?user=' + this.props.uid;

        // Fetch the url with post
        fetch(url, { method: 'POST' })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    profiles: result
                });
            });
    }

    // Select the user that was clicked from the search sheet
    loadSearchedUser(sid, sName) {
        // Close the search sheet
        this.setState({ searchOpen: false });

        // Check if user is already in list
        let exist = false;
        if (Array.isArray(this.state.profiles)) {
            for (let x in this.state.profiles) {
                if (x.id === sid) {
                    exist = true;
                    break;
                }
            }
        }

        // Add user to profiles list if it does not exists there already
        if (!exist) {
            this.setState(prevState => ({
                profiles: [...prevState.profiles, { 'id': sid, 'name': sName }]
            }))
        }

        // Select the user
        this.props.selectProfile([sid, sName]);
    }

}
