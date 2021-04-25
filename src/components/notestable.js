import React, { Component } from 'react'
import '../Styling/notestable.css'

class NotesTable extends Component {

    constructor(props){
        super(props)

        this.state = {
            notes: [
                { from: 'Person One', subject: 'Fall 2020 Enrollment Advising', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                 createddate: '02/22/2019, 12:57p PM', reply: <button class='reply-button'>Reply</button> },
                { from: 'Person Two', subject: 'Fall 2021 Enrollment Advising', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                 createddate: '02/26/2021, 10:22p AM', reply: <button class='reply-button'>Reply</button> }
            ]
        }

    }

    renderTableData() {
        return this.state.notes.map((degree, index) => {
            const { from, subject, body, createddate, reply } = degree
            return(
                <tr key={from}>
                    <td>{from}</td>
                    <td>{subject}</td>
                    <td>{body}</td>
                    <td>{createddate}</td>
                    <td>{reply}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.notes[0])
        return header.map((note, index) => {
            return <th key={index}>{note.toUpperCase()}</th>
        })
    }

    render() {
        return(
        <div class='notes-container'>
            <h1 id='title'>My Notes</h1>
            <div class="inbox-outbox-container">
            <button class="inbox-button">Inbox</button>
            <button class="outbox-button">Outbox</button>
            </div>
            <table id='notes'>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
            </table>
        </div>
        )
    }

}

export default NotesTable