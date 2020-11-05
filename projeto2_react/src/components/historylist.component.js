import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const History = props => (
	<tr>
		<td>{props.history.language}</td>
		<td>{props.history.input}</td>
		<td>{props.history.translation}</td>
		<td>
			<a href='#' onClick={() => { props.deleteExercise(props.history._id) }}>delete</a>
		</td>
	</tr>	
)

export default class HistoryList extends Component {
	constructor(props) {
		super(props);

		this.deleteExercise = this.deleteExercise.bind(this);

		this.state = {
			histories: []
		};
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
			return <History history={currenthistory} deleteExercise={this.deleteExercise} key={currenthistory._id}/>;
		})
	}

	deleteExercise(id) {
		axios.delete('http://localhost:5000/history/'+id)
			.then(res => console.log(res.data));
		
		this.setState({
			histories: this.state.histories.filter(el => el._id !== id)
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