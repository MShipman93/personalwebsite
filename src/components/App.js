var React = require('react');
var createReactClass = require('create-react-class');

// Components
var Banner = require('./Banner');
var Main = require('./Main');

var App = createReactClass({
	// TODO: find a way to not store the state of NavBar in App
	getInitialState: function() {
		return {
			navBarSelectedItem: ""
		};
	},

	handleNavBarItemSelected: function(name) {
		this.setState({navBarSelectedItem: name});
	},

	render: function() {
		return (
			<div>
				<Banner />
				<Main />
			</div>
		);
	}
});

module.exports = App;