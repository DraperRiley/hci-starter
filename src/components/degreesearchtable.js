import React, { Component } from 'react'
import '../Styling/degreesearchtable.css'

class DegreeSearchTable extends Component {

    constructor(props) {
        super(props)
        this.state = {

            degrees: [
                {code: 'A225', name: 'Computer Engineering/Computer Science Accelerated UNDERGRADUATE', startterm: '2002Su', audit: <button class='button-audit'>Audit</button>},
                {code: 'A225', name: 'Computer Engineering/Computer Science Accelerated UNDERGRADUATE', startterm: '2003Su', audit: <button class='button-audit'>Audit</button>},
                {code: 'A225', name: 'Computer Engineering/Computer Science Accelerated UNDERGRADUATE', startterm: '2004Su', audit: <button class='button-audit'>Audit</button>},
                {code: 'A225', name: 'Computer Engineering/Computer Science Accelerated UNDERGRADUATE', startterm: '2005Su', audit: <button class='button-audit'>Audit</button>},
                {code: 'A225', name: 'Computer Engineering/Computer Science Accelerated UNDERGRADUATE', startterm: '2006Su', audit: <button class='button-audit'>Audit</button>},
                {code: 'A225', name: 'Computer Engineering/Computer Science Accelerated UNDERGRADUATE', startterm: '2007Su', audit: <button class='button-audit'>Audit</button>},
                {code: 'A225', name: 'Computer Engineering/Computer Science Accelerated UNDERGRADUATE', startterm: '2008Su', audit: <button class='button-audit'>Audit</button>},
                {code: 'A225', name: 'Computer Engineering/Computer Science Accelerated UNDERGRADUATE', startterm: '2009Su', audit: <button class='button-audit'>Audit</button>},
                {code: 'A225', name: 'Computer Engineering/Computer Science Accelerated UNDERGRADUATE', startterm: '2010Su', audit: <button class='button-audit'>Audit</button>},
                {code: 'A225', name: 'Computer Engineering/Computer Science Accelerated UNDERGRADUATE', startterm: '2011Su', audit: <button class='button-audit'>Audit</button>}
            ]

        }
    }

    renderTableData() {
        return this.state.degrees.map((degree, index) => {
            const { code, name, startterm, audit } = degree
            return (
                <tr key={code}>
                    <td>{code}</td>
                    <td>{name}</td>
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

    render () {
        return (
            <div class="degree-search-container">
                <table id='search-degree-table'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default DegreeSearchTable