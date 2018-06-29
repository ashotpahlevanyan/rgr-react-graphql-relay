import React from 'react';
import API from '../API';
import LinkStore from '../stores/LinkStore';

class Main extends React.Component {
	componentDidMount() {
		API.fetchLinks();
	}

	render() {
		return (
			<div>
				<h3>Links</h3>
				<ul>
					<li>Link ...</li>
					<li>Link ...</li>
				</ul>
			</div>
		);
	}
}

export default Main;