import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../home.css'
import jarjar from '../images/jarjaricon300.jpg'
import kinglon from '../images/klingonicon300.png'
import yoda from '../images/yodaicon300.png'
import wookie from '../images/wookieicon300.png'
import drogo from '../images/drogoicon300.png'
import maul from '../images/maulicon300.png'

export default class Home extends Component {
	render() {
		return(
			<div className="App">
				<header className="App-header">				
	
				</header>

				<div class = "row">
					<div class="column"> 
						
						<a class = "linkp">
							<Link to={"/yoda/"}>
								<img src={yoda} className="App-logo" alt="logo" />
							</Link>
						</a>
						Yoda
					</div>
					<div class="column"> 
						
						
						<a class = "linkp">
							<Link to={"/pirate/"}>
								<img src={kinglon} className="App-logo" alt="logo" />
							</Link>
						</a>
						Klingon
					</div>
					<div class="column"> 
						
						
						<a class = "linkp">
							<Link to={"/wookie/"}>
									<img src={wookie} className="App-logo" alt="logo" />
							</Link>
						</a>
						Wookie
					</div>
						
				</div>
					
				<div class = "row">
					<div class="column">
					
							
						<a class = "linkp">
							<Link to={"/sith/"}>
								<img src={maul} className="App-logo" alt="logo" /> 
							</Link>
						</a>
						Sith

					</div>

					<div class="column">
						
							
						<a class = "linkp">
							<Link to={"/dothraki/"}> 							
								<img src={drogo} className="App-logo" alt="logo" />
							</Link>
						</a>
						Dothraki
						
					</div>
					<div class="column">
						
							
						<a class = "linkp">
							<Link to={"/Gungan/"}>
								<img src={jarjar} className="App-logo" alt="logo" />
							</Link>
						</a>
						Gungan

					</div>

				</div>


			</div>



		)
	}
}