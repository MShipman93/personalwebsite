var React = require('react');
var createReactClass = require('create-react-class');

// Components
var SectionHeader = require('./SectionHeader');

// Model
var connectModel = require('../models/connectModel');

var formStyles = {
	margin: '0 auto',
	width: '80%'
};

var pStyles = {
	textAlign: 'center',
	margin: 0,
	paddingBottom: 24
};

var formDivStyles = {
	marginBottom: 24
};

// var firstnameDivStyles = {
// 	float: 'left',
// 	width: '48%'
// };

// var lastnameDivStyles = {
// 	float: 'right',
// 	width: '48%'
// };

// var nameFieldStyles = {
// 	padding: 10,
// 	fontSize: 14,
// 	marginBottom: 24,
// 	width: "96%"
// };

var messageTextAreaStyle = {
	minHeight: 100,
	padding: 10,
	fontSize: 14,
	width: '98%'
};

var buttonStyles = {
	backgroundColor: 'rgb(41, 128, 185)',
	color: 'white',
	fontSize: 16,
	padding: '10px 20px'
};

var buttonDivStyles = {
	textAlign: 'center',
	paddingBottom: 24
};

var connectIconStyles = {
	height: 60,
	width: 60,
	margin: '0px 4px'
};

var connectIconDivStyles = {
	margin: '0 auto',
	display: 'table',
	paddingBottom: 20
}


var Connect = createReactClass({
	getInitialState: function() {
		return {
			// firstname: '',
			// lastname: '',
			// email: '',
			message: ''
		};
	},

	handleSubmit: function(event) {
		event.preventDefault();

		//for string
		// var firstname = this.state.firstname;
		// var lastname = this.state.lastname;
		// var email = this.state.email;
		var message = this.state.message;

		var subject = '';
		var body = message;

		var emailString = 'mailto:mshipman@hotmail.com.au?subject=' + subject  + '&body=' + body;
		// window.open(emailString);
		window.location.href = emailString;
	},

	handleInputChange: function(event) {
	    var target = event.target;
	    var value = target.value;
	    var name = target.name;

	    this.setState({
	      [name]: value
	    });
	},

	render: function() {

		var connectIcons = connectModel.map(function(item) {
			return <a href={item.link} target="_blank" rel="noopener noreferrer"><img src={item.image} alt={item.title} style={connectIconStyles} /></a>;
		});

		return (
			<div className="greyDiv">
				<div id="Connect" className="contentDiv">
					<SectionHeader title="Connect" />



					<p style={pStyles}>Have any questions? Feel free to send me an email using the form below.</p>				

					<form style={formStyles} onSubmit={this.handleSubmit}>
	    				<div style={formDivStyles}>
					    	<legend>Message*</legend>
					    	<textarea id="message" name="message" className="thinText" style={messageTextAreaStyle} onChange={this.handleInputChange} required />
					    </div>

					    <div style={buttonDivStyles}>
					    	<input className="thinText" style={buttonStyles} type="submit" value="Submit" />
					    </div>

					</form>

					<br />

					<p style={pStyles}>Check out some of my projects and my LinkedIn</p>
					<div style={connectIconDivStyles}>{connectIcons}</div>

					<p style={pStyles}>Download my resume <a href={require("../pdfs/MShipman_CV_2017.pdf")} target="_blank" rel="noopener noreferrer">here</a></p>

				</div>
			</div>
		);
	}


	// Code for future implementation of a custom email server
	/**
	<div style={formDivStyles}>
		<legend>Name*</legend>
		<div style={firstnameDivStyles}>
			<input type="text" id="fname" name="firstname" style={nameFieldStyles} onChange={this.handleInputChange} />
		</div>
		<div style={lastnameDivStyles}>
			<input type="text" id="lname" name="lastname" style={nameFieldStyles} onChange={this.handleInputChange} />
		</div>
	</div>*/
});

module.exports = Connect;