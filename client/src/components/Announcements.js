import React, { Component } from "react";


class Announcements extends Component {
    render() {
        return(
            <div className="container main my-5 text-black text-center p-3 rounded">
                <h1>Class Announcements</h1>
                <hr/>
                <ul>
                    <li className="announcements font-weight-bold">As we prepare to return to school, we are striving for a safe learning environment.</li>
                    <a href="https://www.cdc.gov/coronavirus/2019-ncov/community/schools-childcare/prepare-safe-return.html" target="_blank"><h4>The CDC's Recommendations for a  Safe Return to School</h4></a>
                    <br/>
                    <img src="https://cdn.schoolblocks.com/organizations/46b2da0a-23cd-4af0-8200-2b9d36da2ece/blocks/faccf4d7-cda1-4870-9e69-30b0d62b3379/8vlpbk-back%20to%20school%202020.jpg" alt="backtoschool" class="img-fluid py-2"></img>
                    <br/>
                    <br/>
                    <li className="announcements font-weight-bold">Pizza Hut Bookit Reading Program!<a href="https://www.bookitprogram.com/" target="_blank"><img src="https://everychildareader.net/wp-content/uploads/2019/10/BOOKIT_full-color3.png" alt="PHbook" style={{width: 200}}></img></a> Earn rewards for meeting reading goals!</li>
                    
                </ul>
            </div>
        )
    }

}

export default Announcements;