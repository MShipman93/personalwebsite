var React = require('react');
var createReactClass = require('create-react-class');

var divStyles = {
	paddingTop: 20
}

var imgStyles = {
	maxHeight: 300,
	maxWidth: 300,
	margin: "0px 30px 15px 30px"
};

var About = createReactClass({
	render: function() {
		return (
			<div id="About" className="contentDiv" styles={divStyles}>
				<img className="imgCircle floatLeft" src={require("../images/AboutSelfie.png")} style={imgStyles} alt="About Selfie"/>

				<p>Hi, I’m Matthew! I am passionate software developer who aspires to keep up with the latest trending frameworks in the industry. I loves all things tech and gaming.</p>

				<p>
					As a child I was always surrounded by computers. My father was building computers since I can remember. This sparked my love for computers at a very young age and lead me on the path of IT.
				</p>

				<p>
					When I was younger I always aspired to become a Game Developer as I was, and still am, a lover of gaming. After finishing high school I was offered a position at Griffith University doing a double degree in Information Technology and Multimedia. This was the perfect degree for me. I was able to fulfil my dream of become a Game Developer as well as have a high understanding on web development and systems programming. After my first semester of university my career path changed. I decided to focus more on web, mobile and server development.
				</p>

				<p>
					With this new career path I want to use my passion and enthusiasm to work with equally driven developers to deliver the best quality software possible to people around the world.
				</p>

				<div className="clearBoth"> </div>
			</div>
		);
	}
});

module.exports = About;