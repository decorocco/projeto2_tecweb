import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css'
import minion from '../images/minionicon300.png'
import pirate from '../images/pirateicon300.png'
import yoda from '../images/yodaicon300.png'
import valiryan from '../images/valyrianicon300.png'
import drogo from '../images/drogoicon300.png'
import elvish from '../images/elficon300.png' 

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
								<img src={pirate} className="App-logo" alt="logo" />
							</Link>
						</a>
						Pirate Speak
					</div>
					<div class="column"> 
						
						
						<a class = "linkp">
							<Link to={"/valyrian/"}>
									<img src={valiryan} className="App-logo" alt="logo" />
							</Link>
						</a>
						Valyrian
					</div>
						
				</div>
					
				<div class = "row">
					<div class="column">
					
							
						<a class = "linkp">
							<Link to={"/elvish/"}>
								<img src={elvish} className="App-logo" alt="logo" /> 
							</Link>
						</a>
						Elvish

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
							<Link to={"/minion/"}>
								<img src={minion} className="App-logo" alt="logo" />
							</Link>
						</a>
						Minion

					</div>

				</div>


			</div>



		)
	}
}