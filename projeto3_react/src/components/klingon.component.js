import React, { Component } from 'react';
import '../kinglon.css'
import axios from 'axios'

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
        axios.post(
            "https://klingon.p.rapidapi.com/klingon",
            { "headers": {
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"klingon.p.rapidapi.com",
                "x-rapidapi-key":"f02d5d9c58msh98e1232364bea64p1377b9jsn3a10ac06aeb7",
                "useQueryString":true 
            },
            "params":{
                "text": this.state.text
            },
            "data": {
                
            }
            })
        .then((response)=>{
            this.setState.translation(response.data.contents.translated)
            console.log(response.data.contents.translated)
        })
        .catch((error)=> {
            console.log(error)
        })

    //  this.setState({
    //      text: ''
    //  })
    }

	render() {
		return(
            <div class = "bgk">
                <header class = "title">                   
                    Klingon Language translator
                </header>

                <form action="/speechtranslator" method="post">
                    <div class="form-group">
                        <label for="speech">Write Text:</label>
                        <textarea class="form-control" value={this.state.text} onChange={this.onChangeText} name="speech" required id="" cols="30" rows="10"></textarea>
                    </div>
                    
                </form>

                <div class="form-group">
                <button class="btn btn-danger btn-block" onClick={this.onClickTranslate}>
                        Translate
                </button>
                </div>
                <div class="form-group">
                    <label for="translated">Translated Text:</label>
                    <textarea class="form-control" name="translated" id="" cols="30" rows="10">
                        
                    </textarea>
                </div>
            </div>
		)
	}
}