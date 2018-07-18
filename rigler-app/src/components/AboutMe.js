import React, { Component } from 'react';
import Mary from '../assets/Mary.png';
import actionMary from '../assets/actionMary.png';
import Byron from '../assets/Byron.png';

class AboutMe extends Component {

    render() {
        return (
            <div className="container">
                <div>
                    <h2>About Mary</h2>
                    <p>Mary Rigler is an aspiring teacher in the Pacific Northwest just starting Seattle University's Master's in Teaching program. Passionate about teaching and learning from an early age, she is now studying ways to bring her enthusiasm for the natural world and to make math concepts approachable to a larger audience. She strives to teach middle school math with an engaging interdisciplinary flair.</p>
                    <p>When not thinking about teaching, she loves reading, exploring with her dog, and making glass art.</p>
                    <div className="row">
                        <div className="column">
                            <img src={Mary} alt="Mary's Icon" style={{ width: 300, height: 'auto', borderRadius: 5 }}></img>
                        </div>
                        <div className="column">
                            <img src={Byron} alt="Mary's Icon" style={{ width: 300, height: 'auto', borderRadius: 5 }}></img>
                        </div>
                        <div className="column">
                            <img src={actionMary} alt="Mary's Icon" style={{ width: 300, height: 'auto', borderRadius: 5 }}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default AboutMe;