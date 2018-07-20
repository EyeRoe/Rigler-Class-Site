import React, { Component } from 'react';
import beastGraph from '../assets/growBeastGraph.png';

class GrowBeasts extends Component {

    render() {
        return (
            <div className="container">
                <div>
                    <h2>Grow Beasts</h2>
                    <div className=''>
                        <div className="conditions">
                        </div>
                        <div className="measurements">
                        <img src={beastGraph} alt="globe" style={{ width: 50 + '%', height: 'auto', borderRadius: 5 }} />
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
                        <div className="results">
                        </div>
                        <div className="story">
                        </div>
                        <div className="graphics">
                        </div>
                        <div className="graphs">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default GrowBeasts;