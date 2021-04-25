import React, { Component } from 'react'
import ChatMessage from './ChatMessage';
import './../css/ChatContainer.css';

// The chat container which contains the list of messages
export default class ChatContainer extends Component {

    constructor(props) {
        super(props);

        // The list of the message that the user sent to or from by the select user
        this.state = {
            messages: ''
        };
    }

    // Load messages after component mounts
    componentDidMount() {
        this.loadMessages();
    }

    // Update messages if selected id, counter or the uid has changed
    componentDidUpdate(prevProps) {
        if (this.props.selectedId !== prevProps.selectedId ||
            this.props.counter !== prevProps.counter ||
            this.props.uid !== prevProps.uid) {
            this.loadMessages();
        }
    }

    // Render this component
    render() {
        return (
            <div className='chatsContainer'>
                {Array.isArray(this.state.messages) && this.state.messages.map((value, index) => {
                    return <ChatMessage key={index} message={value.msg} sent={value.sent} />
                })}
            </div>
        )
    }

    // Fetch the messages from API and load it into messages state
    loadMessages() {
        // Url to get the list of the message sent to or from the user by selected user
        let url = process.env.REACT_APP_API_URL + '/api/v1/messages/list?frm=' + this.props.uid + '&to=' + this.props.selectedId;

        // Fetch the url with post
        fetch(url, { method: 'POST' })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    messages: result
                });
            });
    }

}
