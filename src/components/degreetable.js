import React, { Component } from 'react'
import "../Styling/degreetable.css"
import Audit_CS from "./audit_cs.js"
import Audit_MATH from "./audit_math.js"


class DegreeTable extends Component {

    constructor(props){
        super(props)

        //has two states for each of the degrees, as well as the two degrees
        this.state = {
            showComponent: false,
            showComponent2: false,
            degrees: [
                { code: 'B235', name: 'Computer Science', credits: 120.00, startterm: '2019Su', audit: <button class='audit-button' onClick={() => this.handleClickEvent()}>Audit</button> },
                { code: 'N670', name: 'Minor in Mathematics', credits: 15.00, startterm: '2011Sp', audit: <button class='audit-button' onClick={() => this.handleClickEvent2()}>Audit</button> }

            ]
        }

    }

    //iterate through the degrees object and create data
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

    //render table header
    renderTableHeader() {
        let header = Object.keys(this.state.degrees[0])
        return header.map((degree, index) => {
            return <th key={index}>{degree.toUpperCase()}</th>
        })
    }

    //render full table
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
                {this.state.showComponent ? <Audit_CS/> : null}
                {this.state.showComponent2 ? <Audit_MATH/> : null}
            </div>
        </>

        )
    }

    //handle click event for the first button
    handleClickEvent () {
        this.setState({showComponent2: false})
        this.setState({showComponent: !this.state.showComponent})
    }

    //handle click event for second button
    handleClickEvent2 () {
        this.setState({showComponent: false})
        this.setState({showComponent2: !this.state.showComponent2})
    }

}

export default DegreeTable