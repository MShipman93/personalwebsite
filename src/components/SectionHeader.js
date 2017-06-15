var React = require('react');
var createReactClass = require('create-react-class');

var SectionHeader = createReactClass({
	render: function() {
		return (
			<div >		
				<p className="sectionHeader thinText">{this.props.title}</p>
			</div>
		);
	}
});

module.exports = SectionHeader;