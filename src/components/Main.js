import React from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay/classic';
import Link from './Link';
import CreateLinkMutation from '../mutations/CreateLinkMutation';
import { debounce } from 'lodash';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.search = debounce(this.search, 300);
	}
	setLimit = (e) => {
		let newLimit = Number(e.target.value);
		this.props.relay.setVariables({limit: newLimit});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		// Mutate
		Relay.Store.update(
			new CreateLinkMutation({
				title: this.refs.newTitle.value,
				url: this.refs.newUrl.value,
				store: this.props.store
			})
		);
		this.refs.newTitle.value = "";
		this.refs.newUrl.value = "";
	};
	search = (e) => {
		e.preventDefault();
		let query = e.target.value;
		this.props.relay.setVariable({ query });
	};
	render() {
		let content = this.props.store.linkConnection.edges.map(edge => {
			return (
			<Link key={edge.node.id} link={edge.node} />);
		});
		return (
			<div>
				<h3>Links</h3>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Title" ref="newTitle"/>
					<input type="text" placeholder="Url" ref="newUrl"/>
					<button type="submit">Add</button>
				</form>
				Showing: &nbsp;
				<input type="text" placeholder="Search" onChange={this.search} />
				<select onChange={this.setLimit}
						defaultValue={this.props.relay.variables.limit}>
					<option value="100">100</option>
					<option value="200">200</option>
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
		limit: 10,
		query: ''
	},
	fragments: {
		store: () => Relay.QL`
		fragment on Store {
			id,
			linkConnection (first: $limit, query: $query) {
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