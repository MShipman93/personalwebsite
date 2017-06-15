var React = require('react');
var createReactClass = require('create-react-class');

// Components
var About = require('./About');
var Portfolio = require('./Portfolio');
var Skills = require('./Skills');
var Connect = require('./Connect');
var Footer = require('./Footer');

var Main = createReactClass({
	render: function() {
		return (
			<div>
 				<About />
				<Portfolio />
				<Skills />
				<Connect />
				<Footer />
			</div>
		);
	}
});

module.exports = Main;