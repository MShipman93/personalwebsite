var React = require('react');
var createReactClass = require('create-react-class');

// Components
var SectionHeader = require('./SectionHeader');
var CareerListItem = require('./CareerListItem');

// Models
var careerModel = require('../models/careerModel');

var Portfolio = createReactClass({
	render: function() {
		var careerItems = careerModel.map(function(item) {
			return <CareerListItem careerItem={item} />;
		});

		return (
			<div className="greyDiv">
				<div id="Portfolio" className="contentDiv">
					<SectionHeader title="Portfolio" />
					<table>
						<tbody>
							{careerItems}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
});

module.exports = Portfolio;