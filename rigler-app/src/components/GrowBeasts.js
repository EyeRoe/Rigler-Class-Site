import React, { Component } from 'react';
import beastGraph from '../assets/growBeastGraph.png';
import pic1 from '../assets/1.jpg';
import pic2 from '../assets/2.jpg';
import pic3 from '../assets/3.jpg';
import pic4 from '../assets/4.jpg';
import pic4a from '../assets/4a.jpg';
import pic5 from '../assets/5.jpg';

class GrowBeasts extends Component {

    render() {
        return (
            <div className="container">
                <div>
                    <h2>Grow Beasts</h2>
                    <div className=''>
                        <div className="story">
                            <img src={pic1} alt="some beasts" style={{ width: 50 + '%', height: 'auto', borderRadius: 5 }} />
                            <p>Pink and Green had been bullied by a huge red dragon from a young age. The red dragon liked to chase them everywhere, laughing and teasing the young sauropods for their small size.</p>
                            <img src={pic2} alt="some beasts" style={{ width: 50 + '%', height: 'auto', borderRadius: 5 }} />
                            <p>One summer afternoon while hiding out from their dragon bully, Pink turned to Green.</p>
                            <p>“I’m fed up with being pushed around by that huge jerk. I’m going to soak in water until I grow up big and strong, and then we’ll see who chases who around!” </p>
                            <p>“That’s a great idea, Pink.” Green said. “But I bet there’s something out there more exciting to soak in than water.”</p>
                            <p>“What are you going to soak in?”</p>
                            <p>Green pointed to a huge advertisement on the corner for Dr. Pepper. </p>
                            <img src={pic3} alt="some beasts" style={{ width: 50 + '%', height: 'auto', borderRadius: 5 }} />
                            <p>“I hear Dr. Pepper has a lot of caffeine and bubbles, and that sounds more fun to soak in. Plus, the Tyrannosaurus on that billboard is so tall! Dr. Pepper must have caused it to grow so much! They wouldn’t put it on the advertisement if it weren’t true.” Green had made up his mind to soak in soda.</p>
                            <p>Both dinosaurs jumped into jars full of their respective liquids at the same time, promising to check in regularly as they grew. </p>
                            <div className='row'>
                                <div className='column'>
                                    <img src={pic4} alt="some beasts" style={{ width: 300, height: 'auto', borderRadius: 5 }} />
                                </div>
                                <div className='column'>
                                    <img src={pic4a} alt="some beasts" style={{ width: 300, height: 'auto', borderRadius: 5 }} />
                                </div>
                            </div>
                            <p>Pink, Green, and a companion Red T-rex who decided to soak in soy sauce all sat out in jars on the counter. When taking data on their sizes, they measured their lengths from the tips of their noses to the tips of their tails with a handy ruler. </p>
                        </div>
                        <div className="measurements">
                            <div className="Doom">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Hours Elapsed</th>
                                            <th>Red T-Rex (Soy Sauce)</th>
                                            <th>Pink Sauropod (Water)</th>
                                            <th>Green Sauropod (Dr Pepper)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0</td>
                                            <td>4.1</td>
                                            <td>4.4</td>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>3</td>
                                            <td>4.1</td>
                                            <td>4.9</td>
                                            <td>5.3</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>12</td>
                                            <td>4.2</td>
                                            <td>8.5</td>
                                            <td>6.7</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>15</td>
                                            <td>4.2</td>
                                            <td>8.5</td>
                                            <td>6.9</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>22</td>
                                            <td>4.2</td>
                                            <td>8.8</td>
                                            <td>7.4</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>38</td>
                                            <td>4.2</td>
                                            <td>9.6</td>
                                            <td>9.6</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>47</td>
                                            <td>4.3</td>
                                            <td>12.9</td>
                                            <td>10.1</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>61</td>
                                            <td>4.4</td>
                                            <td>13.5</td>
                                            <td>10.6</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>72</td>
                                            <td>4.4</td>
                                            <td>14.1</td>
                                            <td>10.9</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>96</td>
                                            <td>4.4</td>
                                            <td>14.6</td>
                                            <td>11.1</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>142</td>
                                            <td>4.4</td>
                                            <td>15.1</td>
                                            <td>11.4</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='story'>
                            <img src={beastGraph} alt="graph of beast growth" style={{ width: 50 + '%', height: 'auto', borderRadius: 5 }} />
                            <p>At their regular check-ups, Green was dismayed to find that even though he was growing (and always shaking from all his swimming in caffeinated soda), Pink was growing faster than him. </p>
                            <img src={pic5} alt="some beasts" style={{ width: 50 + '%', height: 'auto', borderRadius: 5 }} />
                            <p>The dinosaurs soaked for a full week until they grew no more. Pink reached a maximum length of 15.1 centimeters from nose to tail, while Green reached a maximum length of 11.4 centimeters. Green admired how much Pink had grown in his water bath.</p>
                            <p>It seems that soda stunts a young dinosaur’s growth, but that soy sauce may be the unhealthiest option of all.</p>
                            <p>Now huge, the two sauropods went searching for the dragon that had been bullying them to let it know they wouldn’t allow it to bully anyone again. They found that as soon as the dragon glimpsed them and saw how much they had both grown, it turned tail and ran! </p>
                            <p>Although both Pink and Green grew, it seems that grow beasts can absorb more water than soda over the same time period. Both dinosaurs absorbed liquid rapidly in the first few days, but their rate of growth slowed over time until they reached saturation levels. The T-rex in soy sauce did not grow significantly. The high salt content of the soy sauce may have kept the dinosaur from absorbing any liquid.</p>
                            <p>Would it have helped Green to soak in a non-caffeinated soda instead of Dr. Pepper? Would their growth have been different if they were kept at a different temperature? Should a class about the perils of advertising be taught in Dinosaur School? What do you think?</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default GrowBeasts;