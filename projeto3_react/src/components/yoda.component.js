import React, { Component } from 'react';
import '../yoda.css';
import yoda from '../images/yodaicon300.png';
import axios from 'axios';

var options = {
    method: 'POST',
    url: 'https://rapidapi.p.rapidapi.com/yoda.json',
    params: {text: 'Master Obiwan has lost a planet.'},
    headers: {
      'x-rapidapi-key': 'f02d5d9c58msh98e1232364bea64p1377b9jsn3a10ac06aeb7',
      'x-rapidapi-host': 'yodish.p.rapidapi.com'
    }
  };

export default class Yoda extends Component {

    constructor(props) {
        super(props);

        this.onChangeText = this.onChangeText.bind(this);
        this.onClickTranslate = this.onClickTranslate.bind(this);

        this.state = {
            text: '',
            translation: ''
        };
    }

    onChangeText(e) {
        this.setState({
            text: e.target.value
        });
    }
    
    onClickTranslate(e) {

        axios.post("https://yodish.p.rapidapi.com/yoda.json",
        {text: (this.state.text)
        }, {headers: {
            'x-rapidapi-key': 'f02d5d9c58msh98e1232364bea64p1377b9jsn3a10ac06aeb7',
            'x-rapidapi-host': 'yodish.p.rapidapi.com'
        }})
        .then((response)=>{
            this.setState({
                translation: (response.data.contents.translated)
            });
            console.log(response.data.contents.translated);
            axios.post("http://localhost:5000/history/add/", {
                language: "Yoda", input: this.state.text, translation: this.state.translation
            })
        })
        .catch((error)=> {
            console.log(error)
        })

        // this.setState({
        //     text: ''
        // })
    }

	render() {
		return(
            <div class = "bg">
                <header class = "title">    
                    Yoda Language translator
                </header>
                <form action="/speechtranslator" method="post">
                    <div class="form-group">
                        <label for="speech">Write Text:</label>
                        <textarea class="form-control" value={this.state.text} onChange={this.onChangeText} name="speech" required id="" cols="30" rows="3"></textarea>
                    </div>
                </form>
                <div class="form-group">
                    <button class="btn btn-danger btn-block" onClick={this.onClickTranslate}>
                        Translate
                    </button>
                </div>
                <div class="form-group">
                    <label for="translated">Translated Text:</label>
                    <textarea class="form-control" value={this.state.translation} name="translated" id="" cols="30" rows="3">   
                    </textarea>
                </div>
            </div>
		)
	}
}