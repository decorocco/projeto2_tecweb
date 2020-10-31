import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../home.css'
import logo from '../images/jarjar.jpg'

export default class Home extends Component {
	render() {
		return(
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Useless language translator
					</p>
					<a>
						<Link to={"/yoda/"}>| Yoda </Link><Link to={"/klingon/"}>| Klingon </Link>
					</a>
				</header>
			</div>
		)
	}
}