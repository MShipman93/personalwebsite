var React = require('react');
var createReactClass = require('create-react-class');

var careerListItemStyles = {
	clear: 'both',

	columnSpan: 2
};

var imgStyles = {
	marginRight: 10,
	borderColor: '#e7e7e7',
	borderStyle: 'solid',
	borderRadius: 24,
    borderWidth: 1
};

var imgTdStyles = {
	verticalAlign: 'top'
}

var pStyles = {
	margin: '5px 0px'
};

var ulStyles = {
	margin: 0
};

var technologiesImageStyles = {
	height: 80,
	width: 80,
	margin: '0px 4px'
};

var bottomTdStyles = {
	paddingBottom: 30
};

var CareerListItem = createReactClass({
	render: function() {

		var careerItem = this.props.careerItem;

		var achievementsList = careerItem.achievementBulletPoints.map(function(item) {
			return <li className="thinText">{item}</li>;
		});

		var technologiesImages = careerItem.technologiesImageURLs.map(function(item) {
			return <img style={technologiesImageStyles} src={item.image} alt={item.title} />
		});

		var validCompany = careerItem.company !== undefined && careerItem.company.length;
		var validLocation = careerItem.location !== undefined && careerItem.location.length;
		var displayCompanyLocationText = (validCompany && validLocation);

		var companyLocationText = displayCompanyLocationText ? <span className="thinText"> - {careerItem.company}, {careerItem.location}</span> : '';

		var itemLink = undefined;

		if(careerItem.link !== undefined && careerItem.link.length > 0) {
			itemLink = <p style={pStyles} className="thinText"><a href={careerItem.link} target="_blank" rel="noopener noreferrer">{careerItem.link}</a></p>;
		}

		return (
			<tr style={careerListItemStyles}>
				<td style={imgTdStyles}>
					<img style={imgStyles} src={careerItem.image} alt="" width="160px" />
				</td>
				<td style={bottomTdStyles}>
					<p style={pStyles}>{careerItem.role}{companyLocationText}</p>
					<p style={pStyles} className="thinText">{careerItem.dates}</p>
					<p style={pStyles} className="thinText">{careerItem.description}</p>
					{itemLink}

					<br />

					<p style={pStyles} className="thinText">Major Achievements:</p>
					<ul style={ulStyles}>
						{achievementsList}
					</ul>

					<br />

					<p style={pStyles} className="thinText">Technologies:</p>
					<div>
						{technologiesImages}
					</div>
				</td>
			</tr>
		);
	}
});

module.exports = CareerListItem;