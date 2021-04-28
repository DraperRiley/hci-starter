import React, { Component } from 'react'
import "../Styling/degreetable.css"

class DegreeTable extends Component {

    constructor(props){
        super(props)

        this.state = {
            showComponent: false,
            degrees: [
                { code: 'B235', name: 'Computer Science', credits: 120.00, startterm: '2019Su', audit: <button class='audit-button' onClick={() => this.handleClickEvent()}>Audit</button> }
            ]
        }

    }

    renderTableData() {
        return this.state.degrees.map((degree, index) => {
            const { code, name, credits, startterm, audit } = degree
            return(
                <tr key={code}>
                    <td>{code}</td>
                    <td>{name}</td>
                    <td>{credits}</td>
                    <td>{startterm}</td>
                    <td>{audit}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.degrees[0])
        return header.map((degree, index) => {
            return <th key={index}>{degree.toUpperCase()}</th>
        })
    }

    render() {
        return(
        
        <>
            <div class='degree-container'>
                <h1 id='title'>My Degrees</h1>
                <table id='degrees'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>

            <div class='requirements'>
                {this.state.showComponent ? <h1>TODO</h1> : null}
            </div>
        </>

        )
    }

    handleClickEvent () {
        this.setState({showComponent: !this.state.showComponent})
    }

}

export default DegreeTable