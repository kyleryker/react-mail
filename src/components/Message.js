import React from "react";
import {findMessageById} from '../services/messageService';

export default class Message extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			name: ""
			, email: ""
			, content: ""
		}
	}
	getMessage(messageId){
		const message = findMessageById(messageId);
		this.setState({
			name: message.name,
			email: message.email,
			content:message.content
		});
	}
	componentWillMount(){
		this.getMessage.call(this, this.props.params.messageId);
	}

	componentWillUpdate(nextProps, nextState){
		if(nextProps.params.messageId !== this.props.params.messageId){
			this.getMessage.call(this, this.props.params.messageId);
		}
	}

	render() {
		return (
			<div>
				<h1>{ this.state.name }</h1>
				<h3>{ this.state.name }</h3>
				<p>{ this.state.name }</p>
			</div>
		);
	}
}
