var React = require('react');
var createReactClass = require('create-react-class');

var skillsImageStyles = {
	height: 80,
	width: 80,
	margin: '0px 4px'
};

var divStyle = {
	margin: '0 auto',
	display: 'table',
	paddingBottom: 20
}

var SkillListItem = createReactClass({
	render: function() {
		var skillItems = this.props.skillItems;

		var skillImages = skillItems.map(function(item) {
			return <img style={skillsImageStyles} src={item.image} alt={item.title} />
		});

		return (
			<div style={divStyle}>
				{skillImages}
			</div>
		);
	}
});

module.exports = SkillListItem;