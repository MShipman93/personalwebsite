var React = require('react');
var createReactClass = require('create-react-class');

// Components
var SectionHeader = require('./SectionHeader');
var SkillListItem = require('./SkillListItem');

// Models
var skillsModel = require('../models/skillsModel');

var skillTitleStyles = {
	color: 'rgb(52, 152, 219)',
	fontSize: '32px',
	fontWeight: 100,
	margin: '10px 0px',
	textAlign: 'center'
};

var Skills = createReactClass({
	render: function() {

		var skillsItems = skillsModel.map(function(item) {
			return (
				<div>
					<h1 style={skillTitleStyles} className="thinText">{item.name}</h1>
					<SkillListItem skillItems={item.data} />
				</div>
			);
		});

		return (
			<div id="Skills">
				<SectionHeader title="Skills" />
				{skillsItems}
			</div>
		);
	}
});

module.exports = Skills;