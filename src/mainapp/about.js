import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

const About = () =>{
    return(
        <div className="about">
            <h1>[Haraki website]</h1>
            <nav>
                <Link to="">[Home]</Link>
                <Link to="member">[Member]</Link>
            </nav>
        </div>
    )
}

export default About