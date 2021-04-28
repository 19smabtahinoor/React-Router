import React from 'react'
import Button from '@material-ui/core/Button';

function About(){
    return(
        <>

        <div className="about_container">
            <div className="about_wrapper">
                <div className="about_img">
                    <img src="https://brigatebyabtahi.netlify.app/images/ourproject.jpg" alt="aboutimg"/>
                </div>

                <div className="about_us_desc">
                    <div className="about_heading">
                        <h1>Work with our teams</h1>
                    </div>

                    <div className="about_description">
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat</p>
                    </div>

                    <div className="work_list">
                        <ul>
                            <li>Building Quality</li>
                            <li>Honest Advisors</li>
                            <li>24/1week Supports</li>
                            <li>Performances Team</li>
                            <li>Work Solutions</li>
                        </ul>
                    </div>
                    <Button className="work_button">Get work</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default About