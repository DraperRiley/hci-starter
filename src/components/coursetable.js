import React, { Component } from 'react'
import "../Styling/coursetable.css"

class CourseTable extends Component {

    //this is the contructor, which sets the state of our component
    constructor(props) {
        super(props)
        this.state = {

            //these are objects which represent courses
            courses: [
                { code: 'CS4513', title: 'Database Management Systems', term: "2022Sp", credits: 3, remove: <button class="remove-button">Remove</button> },
                { code: 'CS4273', title: 'Capstone Design Project', term: "2022Sp", credits: 3, remove: <button class="remove-button">Remove</button> }
            ]

        }
    }

    //this iterates through the courses objects and creates table data
    renderTableData() {
        return this.state.courses.map((course, index) => {
            const { code, title, term, credits, remove } = course
            return (
                <tr key={code}>
                    <td>{code}</td>
                    <td>{title}</td>
                    <td>{term}</td>
                    <td>{credits}</td>
                    <td>{remove}</td>
                </tr>
            )
        })
    }

    //this renders our table header with titles for columns
    renderTableHeader() {
        let header = Object.keys(this.state.courses[0])
        return header.map((course, index) => {
            return <th key={index}>{course.toUpperCase()}</th>
        })
    }

    //the render method which returns the full table
    render () {
        return (
            <div class="plan-container">
                <h1 id ='title'>My Course Plan</h1>
                <table id='courses'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
                <button class="add-course">Add Course</button>
            </div>
        )
    }

}

export default CourseTable
