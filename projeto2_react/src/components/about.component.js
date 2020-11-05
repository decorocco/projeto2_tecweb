import React, { Component } from 'react';
import '../style/about.css'
import jarjar from '../images/jarjar.png' 
import yoda from '../images/yoda300.png' 
import drogo from '../images/drogo300.png' 



export default class About extends Component {
	render() {
		return(
			<div>
				<div class="about-section">
					<h1>About Us</h1>
					<p></p>
					<p>Projeto 2 </p>
					<p>Tecnologias Web</p>
				</div>

				<h2>Our Team

				</h2>

				<div class="row2">
					<div class="column2">
						<div class="container">
							<h2>André Tavernaro</h2>
							<img src={yoda} className="App-logo" alt="logo" />
							<p class="title2">Estudante e engenheiro de fitas vhs</p>
							<p>Calço 41 </p>
						</div>
					</div>

					<div class="column2">
						<div class="container">
							<h2>André Rocco</h2>
							<img src={jarjar} className="App-logo" alt="logo" />
							<p class="title2">Estudante e futuro motorista de uber </p>
							<p>Este pai é brabo</p>
						</div>
					</div>

					<div class="column2">
						<div class="container">
							<h2>Camila Achutti</h2>
							<img src={drogo} className="App-logo" alt="logo" />
							<p class="title2">Professora</p>
							<p>Prof mais braba e 1000grau de todas</p>
						</div>
					</div>

  				</div>
			
			</div>
		)
	}
}