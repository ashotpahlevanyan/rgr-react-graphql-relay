import React from 'react';
import PropTypes from 'prop-types';

class Main extends React.Component {

	static propTypes = {
		limit: PropTypes.number
	};

	static defaultProps = {
		limit: 2
	};

	render() {
		let content = this.state.links.slice(0, this.props.limit).map((link) => {
			return (
			<li key={link._id}>
				<a href={link.url}>{link.title}</a>
			</li>);
		});
		return (
			<div>
				<h3>Links</h3>
				<ul>
					{content}
				</ul>
			</div>
		);
	}
}

export default Main;