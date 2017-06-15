var React = require('react');
var createReactClass = require('create-react-class');

var navBarItems = ["About", "Portfolio", "Skills", "Connect"];

var NavBar = createReactClass({
	render: function() {

		var buttons = navBarItems.map(function(item) {
			var anchor = "#" + item;

			return (
				<a href={anchor} className="navButton thinText">{item}</a>
			);
		});

		return <div className="navDiv">{buttons}</div>


		// // Build list items
		// var listItems = navBarItems.map(function(item, index) {
		// 	var classes = "navBarItem";

		// 	if(index == selectedIndex)
		// 		classes += " navBarItemSelected"

		// 	return (
		// 		// TODO: see if there is another way to handle onClick to use handleListItemClick and directly pass index
		// 		<li className={classes} onClick={() => handleListItemOnClick(index)} key={"navBarListItem_" + index}>
		// 			{item}
		// 		</li>
		// 	);
		// });

		// // Add list items to ul
		// return (
		// 	<ul className="navBarList">{listItems}</ul>
		// );
	}
});

module.exports = NavBar;