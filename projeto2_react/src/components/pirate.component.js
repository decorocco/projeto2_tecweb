import React, { Component } from 'react';
import '../style/pirate.css'
import axios from 'axios'

function WordCount(str) { 
    if  (str.replace(/\s/g,"").length == 0) {
        return "0"
    }
    else{
        return str.split(" ").length;
    }
    
}

export default class About extends Component {

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
        axios.post('https://rapidapi.p.rapidapi.com/pirate.json',
        {text: (this.state.text)
        }, {headers: {
            'x-rapidapi-key': 'f02d5d9c58msh98e1232364bea64p1377b9jsn3a10ac06aeb7',
            'x-rapidapi-host': 'piratespeak.p.rapidapi.com'
        }})
        .then((response)=>{
            this.setState({
                translation: (response.data.contents.translated)
            });
            console.log(response.data.contents.translated);
            axios.post("http://localhost:5000/history/add/", {
                language: "Pirate Speak", input: this.state.text, translation: this.state.translation
            })
        })
        .catch((error)=> {
            console.log(error)
        })
    }

	render() {
		return(
            <div class = "bgv">
                <header class = "title">    
                        Pirate Speak Translator
                </header>
                <div class = "row">
                    <div class="column1"> 
                        <form action="/speechtranslator" method="post">
                        <label for="speech">Write Text:</label>
                            <div class="form-group">
                                
                                <textarea class="form-control" value={this.state.text} onChange={this.onChangeText} name="speech" required id="" cols="30" rows="3"></textarea>
                            </div>
                        </form>
                        <div>
                            <button class="btn btn-danger btn-block" onClick={this.onClickTranslate}>
                                Translate
                            </button>
                        </div>
                    </div>
                    <div class = "column1">
                    <label for="translated">Translated Text:</label>
                        <div class="form-group">
                            
                            <textarea class="form-control" value={this.state.translation} name="translated" id="" cols="30" rows="3">   
                            </textarea>
                        </div>
                        <div>
                            <label class = "wordcount" >Word Count = {(WordCount(this.state.translation))} </label>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}