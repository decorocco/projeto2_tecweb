import React, { Component } from 'react';
import '../kinglon.css'

export default class About extends Component {
	render() {
		return(
            <div class = "bgk">
                <header class = "title">                   
                    Klingon Language translator
                </header>

                <form action="/speechtranslator" method="post">
                    <div class="form-group">
                        <label for="speech">Write Text:</label>
                        <textarea class="form-control" name="speech" required id="" cols="30" rows="10"></textarea>
                    </div>
                    
                </form>

                <div class="form-group">
                <button class="btn btn-danger btn-block">
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