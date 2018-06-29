var React = require('react');
var ReactDOM = require('react-dom');


class Hello extends React.Component {
	render() {
			return React.createElement("h3", null, "Hello React!");
	}
}

ReactDOM.render(React.createElement(Hello), document.getElementById('react'));