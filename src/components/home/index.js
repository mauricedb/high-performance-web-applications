import { h, Component } from 'preact';
import { route } from "preact-router";

export default class Home extends Component {
	componentDidMount() {
		route('/movies')
	}

	render() {
		return (
			<div>
				<h1>Home</h1>
				<p>This is the Home component.</p>
			</div>
		);
	}
}
