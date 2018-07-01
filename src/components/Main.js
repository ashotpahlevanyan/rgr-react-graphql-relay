import React from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay/classic';

class Main extends React.Component {

	static propTypes = {
		limit: PropTypes.number
	};

	static defaultProps = {
		limit: 2
	};

	render() {
		let content = this.props.store.links.slice(0, this.props.limit).map((link) => {
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

// Declare the data requirements for this component
Main = Relay.createContainer(Main, {
	fragments: {
		store : () => Relay.QL`
		fragment on Store {
			links {
				_id,
				title,
				url
			}
		}
		`
	}
});

export default Main;