import React, { Component } from 'react';
import '../style/minion.css'
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
        axios.post('https://rapidapi.p.rapidapi.com/minion.json',
        {text: (this.state.text)
        }, {headers: {
            'x-rapidapi-key': '77d70301cbmsh13ce25fdaf06c15p11ad75jsnf8b429fd3c6c',
            'x-rapidapi-host': 'minion.p.rapidapi.com'
        }})
        .then((response)=>{
            this.setState({
                translation: (response.data.contents.translated)
            });
            console.log(response.data.contents.translated);
            axios.post("http://localhost:5000/history/add/", {
                language: "Minion", input: this.state.text, translation: this.state.translation
            })
        })
        .catch((error)=> {
            console.log(error)
        })
    }

	render() {
		return(
            <div class = "bgj">
                <header class = "title">    
                        Minion Language Translator
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