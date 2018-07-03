import React from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay/classic';
import Link from './Link';


class Main extends React.Component {
	setLimit = (e) => {
		let newLimit = Number(e.target.value);
		this.props.relay.setVariables({limit: newLimit});
	};
	render() {
		let content = this.props.store.linkConnection.edges.map(edge => {
			return (
			<Link key={edge.node.id} link={edge.node} />);
		});
		return (
			<div>
				<h3>Links</h3>
				Showing: &nbsp;
				<select onChange={this.setLimit}>
					<option value="100">100</option>
					<option value="200" selected>200</option>
				</select>
				<ul>
					{content}
				</ul>
			</div>
		);
	}
}

// Declare the data requirements for this component
Main = Relay.createContainer(Main, {
	initialVariables : {
		limit: 10
	},
	fragments: {
		store: () => Relay.QL`
		fragment on Store {
			linkConnection (first: ${limit}) {
				edges {
					node {
						_id,
						${Link.getFragment('link')}
					}
				}
			}
		}
		`
	}
});

export default Main;