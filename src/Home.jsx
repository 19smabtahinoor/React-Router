import React from 'react'
import Button from '@material-ui/core/Button';

function Home(){
    return(
        <>
            <div className="homepage_container">
                <div className="homepage_elements">
                    <h1 className="homepage_heading">
                    EXPERIENCE IS BETTER WAY <br/>
                    TO BUILD SUCCESS
                    </h1>

                    <span className="homepage_subheading">
                    Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem.
                    </span>

                    <Button className="work_button">Work With Us</Button>
                </div>
            </div>
        </>
    )
}
export default Home