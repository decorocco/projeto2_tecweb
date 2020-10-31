import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const History = props => (
	<tr>
		<td>{props.history.language}</td>
		<td>{props.history.input}</td>
		<td>{props.history.translation}</td>
	</tr>	
)

export default class HistoryList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			histories: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:5000/history/')
			.then(response => {
				this.setState({ histories: response.data })
			})
			.catch((error) => {
				console.log(error);
			})
	}

	historyList() {
		return this.state.histories.map(currenthistory => {
			return <History history={currenthistory} key={currenthistory._id}/>;
		})
	}

	render() {
		return(
			<div>
				<h3>History</h3>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<th>Language</th>
							<th>Input</th>
							<th>Translation</th>
						</tr>
					</thead>
					<tbody>
						{ this.historyList() }
					</tbody> 
				</table>
			</div>
		)
	}
}