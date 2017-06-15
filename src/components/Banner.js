var React = require('react');

// Components
var NavBar = require('./NavBar');

function Banner() {
	return (
		<div>
			<div className="contentDiv">
				<h1 className="bannerHeading thinText">Matthew Shipman</h1>
				<NavBar />
			</div>
			<hr className="clearBoth" />
		</div>
	);
}

module.exports = Banner;