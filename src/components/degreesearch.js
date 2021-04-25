import React, { Component } from 'react'
import '../Styling/degreesearch.css'

class DegreeSearch extends Component {

    constructor (props) {
        super(props)
    }

    render () {

        return(
            <div class='search-form-container'>
                <div class='search-form'>
                <form>
                    
                    <div class='search-top'>
                    <label for='code'>Degree Code:</label>
                    <input  id='code' type='text' />

                    <label for='search-options-one'>Search Options:</label>
                    <select id='search-options-one'>
                        <option value='startswith'>Starts With</option>
                        <option value='contains'>Contains</option>
                        <option value='exactmatch'>Exact Match</option>
                        <option value='matchallwords'>Match All Words</option>
                        <option value='matchanywords'>Match Any Words</option>
                    </select>
                    </div>

                    <br/>

                    <div class='search-top'>
                    <label for='name'>Degree Name:</label>
                    <input id='name' type='text' />

                    <label for='search-options-two'>Search Options:</label>
                    <select id='search-options-two'>
                        <option value='startswith'>Starts With</option>
                        <option value='contains'>Contains</option>
                        <option value='exactmatch'>Exact Match</option>
                        <option value='matchallwords'>Match All Words</option>
                        <option value='matchanywords'>Match Any Words</option>
                    </select>
                    </div>

                    <br/>

                    <div class='search-top'>
                    <label for='results'>Search Options:</label>
                    <select id='results'>
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                        <option value='50'>50</option>
                        <option value='100'>100</option>
                    </select>
                    </div>

                    <br/>

                    <button type="button" class='degree-search-button'>Search</button>

                </form>
                </div>
            </div>
        )

    }

}

export default DegreeSearch