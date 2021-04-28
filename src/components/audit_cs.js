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
                        <span>CS1323 or CS1321 or CS1324</span>
                        <span class="notes">Must achieve a minimum grade of B</span>   
                    </div>
                    <div>
                        <StaticImage src="../images/done.svg" alt="complete" />
                        <span>CS2334</span>
                        <span class="notes">Must achieve a minimum grade of B</span>   
                    </div>
                    <div>
                        <StaticImage src="../images/done.svg" alt="complete" />
                        <span>CS2413</span>
                    </div>
                    <div>
                        <StaticImage src="../images/done.svg" alt="complete" />
                        <span>CS2813 or MATH2513</span>
                    </div>
                    <div>
                        <StaticImage src="../images/done.svg" alt="complete" />
                        <span>CS2614</span>
                    </div>
                    <div>
                        <StaticImage src="../images/done.svg" alt="complete" />
                        <span>CS3113</span>
                    </div>
                    <div>
                        <StaticImage src="../images/done.svg" alt="complete" />
                        <span>CS3203</span>
                    </div>
                    <div>
                        <StaticImage src="../images/done.svg" alt="complete" />
                        <span>CS3823</span>
                    </div>
                    <div>
                        <StaticImage src="../images/done.svg" alt="complete" />
                        <span>CS3053</span>
                    </div>
                    <div>
                        <StaticImage src="../images/done.svg" alt="complete" />
                        <span>CS3323</span>
                    </div>
                    <div>
                        <StaticImage src="../images/progress.svg" alt="progress" />
                        <span>CS4263</span>
                    </div>
                    <div>
                        <StaticImage src="../images/progress.svg" alt="progress" />
                        <span>CS4413</span>
                    </div>
                    <div>
                        <StaticImage src="../images/courseplan.svg" alt="courseplan" />
                        <span>CS4513</span>
                    </div>
                    <div>
                        <StaticImage src="../images/courseplan.svg" alt="courseplan" />
                        <span>CS4273</span>
                    </div>
                    <div>
                        <StaticImage src="../images/incomplete.svg" alt="incomplete" />
                        <span>Approved CS Elective</span>
                    </div>
                    <div>
                        <StaticImage src="../images/incomplete.svg" alt="incomplete" />
                        <span>Approved CS Elective</span>
                    </div>
                    
                </div>
                <h1 id="req">Conditions</h1>
                <div class="requirement-layout">
                    <span>No credits with special code (PNP), may be used from AllCourses</span>
                    <span>No credits with special code (old), may be used from AllCourses</span>
                    <span>A total of 15 credits from Any Upper-Division (ud) course.</span>
                    <span>A total of 30 credits</span>
                    <span></span>
                </div>
                
            </div>
            
            </>
        )

    }

}

export default Audit