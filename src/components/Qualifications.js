var React = require('react');
var createReactClass = require('create-react-class');

// Components
var SectionHeader = require('./SectionHeader');

var Qualifications = createReactClass({
	render: function() {
		return (
			<div id="Qualifications">
				<SectionHeader title="Qualifications" />
			</div>
		);
	}
});

module.exports = Qualifications;