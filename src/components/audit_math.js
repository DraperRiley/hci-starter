import React, { Component } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import '../Styling/audit.css'

class Audit extends Component {

    constructor (props) {
        super(props)

        this.state = {
            showComponent: false,
        }

    }

    render () {

        return(

            <>

            <div class='container'>
                <h1 >Legend</h1>
                <div class="legend-layout">
                    <div class="item-container">
                        <StaticImage src="../images/done.svg" alt="complete" />
                        <span>Indicates course requirement has been completed</span>
                    </div>
                    <div class="item-container">
                        <StaticImage src="../images/incomplete.svg" alt="incomplete" />
                        <span>Indicates course requirement is not completed</span>
                    </div>
                    <div class="item-container">
                        <StaticImage src="../images/progress.svg" alt="progress" />
                        <span>Indicates course requirement is currently being taken</span>
                    </div>
                    <div class="item-container">
                        <StaticImage src="../images/courseplan.svg" alt="courseplan" />
                        <span>Indicates course requirement is in the course plan</span>
                    </div>
                </div>

                <h1 id="req">Requirements</h1>
                <div class="requirement-layout">
                    <div>
                        <StaticImage src="../images/done.svg" alt="complete" />
                        <span>MATH2443 or MATH2934</span>
                    </div>
                    <div>
                        <StaticImage src="../images/done.svg" alt="complete" />
                        <span>MATH3960 or MATH3970 or Any MATH course at the 4000-level</span>
                    </div>
                    <div>
                        <StaticImage src="../images/progress.svg" alt="progress" />
                        <span>Any MATH course at the 4000-level</span>

                    </div>
                    <div>
                        <StaticImage src="../images/done.svg" alt="complete" />
                        <span>Any-upper division MATH course</span>
                        <span class="notes">Must achieve a minimum grade of C</span>   
                    </div>
                    <div>
                        <StaticImage src="../images/done.svg" alt="complete" />
                        <span>MATH 2934 or MATH1914</span>
                    </div>
                    
                   
                    
                </div>
                <h1 id="req">Conditions</h1>
                <div class="requirement-layout">
                    <span>A total of 9 credits from Any Upper-Division course</span>
                    <span>A total of 6 credits from Residence credit only [excludes transfer (tr), correspondence (corr), and examination (adv) credit].</span>
                    <span>No credits with special code (PNP), may be used from AllCourses</span>
                    <span></span>
                </div>
                
            </div>
            
            </>
        )

    }

}

export default Audit