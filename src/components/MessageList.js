import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'

import "../style.css"
class MessageList extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: [
                {
                    id: '1',
                    username: 'John Doe',
                    text: 'Whats popping Jimbo',
                },

                {
                    id: '2',
                    username: 'Haroun Ansari',
                    text: 'Izu is a great guy',
                },

                {
                    id: '3',
                    username: 'Izu Elfaki',
                    text: 'Haroun is the GOAT',
                },
                {
                    id: '4',
                    username: 'Elmouiz Elfaki',
                    text: 'The weather is pretty great!',
                }
            ]
        }
    }

    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }
    }

    render() {
        // if (!this.props.roomId) {
        //     return(
        //         <div className="message-list">
        //             <div className="join-room">
        //                 &larr; Join a Room!
        //             </div>
        //         </div>
        //     )
        // }
        // return(
        //     <div className="message-list">
        //         {this.props.messages.map((message, index) => {
        //             return (
        //                 <Message key={message.id} username={message.senderId} text={message.text}/>
        //             )
        //         })}
        //     </div>
        // )

        return(
            <div className="message-list">
                {this.state.messages.map((message, index) => {
                    return (
                        <Message key={message.id} username={message.username} text={message.text}/>
                    )
                })}
            </div>
        )
    }
}

export default MessageList