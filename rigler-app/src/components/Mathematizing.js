import React, { Component } from 'react';
import maryGraph from '../assets/maryGraph.png';
import succGlobe from '../assets/succulentGlobe.png';
import bbSucc from '../assets/bbSucc.png';
import mamaSucc from '../assets/mamaSucc.png';
import daddySucc from '../assets/daddySucc.png';


class Math extends Component {

    render() {
        return (
            <div className="container">
                <div>
                    <h2>Mathematizing and Sciencizing</h2>
                </div>
                <div className='row'>
                    <div className='column'>
                        <img src={bbSucc} alt="a baby succulent" style={{ width: 300, height: 'auto', borderRadius: 5 }} />
                    </div>
                    <div className='column'>
                        <img src={mamaSucc} alt="an adult succulent and a baby succulent" style={{ width: 300, height: 'auto', borderRadius: 5 }} />
                    </div>
                    <div className='column'>
                        <img src={daddySucc} alt="a very large succulent with an assortment of smaller succulents" style={{ width: 300, height: 'auto', borderRadius: 5 }} />
                    </div>
                </div>
                <div className="titles">
                    <h3 className="subHeader">Mathematizing:</h3>
                    <h3 className="subHeader">Succulent Farm</h3>
                </div>
                <div className="Essay">
                    <div className="intro">
                        <p>Last August, my close friend and roommate Lindsey moved to Salt Lake City on short notice due to a fabulous job opportunity. On the final night we crammed every one of her bags, boxes, and houseplants into her girlfriend’s hatchback and bid them all a tearful farewell. As they drove off, I remember wondering if we had successfully found and packed everything. It turns out that Lindsey had indeed left behind a few reminders of her presence: a hairdryer, a cheese grater, and a single leaf fallen from a potted succulent. </p>
                        <p>When I found that leaf the following week (behind the toaster), I noticed something unexpected: the base of the leaf had sprouted several fine root strands. After a little research, I found that succulents often propagate from dropped leaves, sprouting roots and a new apical meristem from the base of the fallen cutting to create a separate, “new” plant. I had the beginnings of my very own Sedum rubrotinctum, roughly 850 miles away from its older clone. I placed the leaf on a bed of soil and let it grow, watering it in teaspoons once or twice a week. In October it had produced a tiny bud. After tending it through the winter, in March I found that one of the Sedum’s new adult leaves had fallen off into the pot next to it, and by May that new propagation was itself budding into an additional Sedum clone. At the age of 8 months, Sedum began dropping additional leaves at a rate of 1/month, all of which have taken root and began to grow. </p>
                        <p>I now have a budding community of Sedum rubrotinctum on my hands, and a lot of questions that call out for some mathematical analysis. How can I model their rate of propagation? At the current rate of population growth, how quickly will my tiny farm multiply? How many succulents will I have in a year? In three years? How long will it be until I need to buy a bigger pot? Until I need to buy a bigger house? Could Lindsey’s Sedum rubrotinctum one day overwhelm us all and cover the planet?</p>
                        <p>Let’s look at this situation one step at a time.</p>
                    </div>
                    <div className="assumptions">
                        <h3 className="subHeader">My Assumptions:</h3>
                        <ol>
                            <li>Sedum clones reach maturity after 8 months.</li>
                            <li>Adult Sedum clones drop one new leaf per month.</li>
                            <li>Every dropped leaf successfully propagates a new clone.</li>
                            <li>For the purposes of the model, Sedum live and propagate forever, unaffected by resource limitations and immune to death, disease, or environmental factors.</li>
                        </ol>
                    </div>
                    <div className="data">
                        <h3 className="subHeader">Gathering Data:</h3>
                        <p>Since baby clones and adult clones are contributing differently to my population, I decided to keep track of baby clones, adult clones, and our total number of individuals per month.</p>
                        <p>We started by finding 1 baby clone behind the toaster during month zero…</p>
                        <div className="Doom">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Months Since Lindsey Moved Out</th>
                                        <th>Number of Baby Clones</th>
                                        <th>Number of Adult Clones</th>
                                        <th>Total Population</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>3</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>4</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>5</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>6</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>7</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>8</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <p>The population was pretty uninteresting for the first few months, since we didn’t have any adults yet. Finally, in month 8, our original leaf reaches maturity and drops a baby clone of its own! We now have two individuals: one baby, and one adult. Every new month, the adult will drop a new baby clone that will itself start growing up…</p>
                        </div>
                        <div className="Doom">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Months Since Lindsey Moved Out</th>
                                        <th>Number of Baby Clones</th>
                                        <th>Number of Adult Clones</th>
                                        <th>Total Population</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>9</td>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>3</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>10</td>
                                        <td>3</td>
                                        <td>1</td>
                                        <td>4</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>11</td>
                                        <td>4</td>
                                        <td>1</td>
                                        <td>5</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>12</td>
                                        <td>5</td>
                                        <td>1</td>
                                        <td>6</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>13</td>
                                        <td>6</td>
                                        <td>1</td>
                                        <td>7</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>14</td>
                                        <td>7</td>
                                        <td>1</td>
                                        <td>8</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>15</td>
                                        <td>8</td>
                                        <td>1</td>
                                        <td>9</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>16</td>
                                        <td>9</td>
                                        <td>2</td>
                                        <td>11</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <p>We are now officially predicting the future. It looks like when 12 months have passed, we expect to have 6 clones in our farm – one adult, and five babies. Between month 9 and month 15, our single adult clone sheds one leaf every month that becomes an additional baby clone. Come month 16, we find that the baby clone our adult dropped in month 8 has also become an adult, doubling our number of adult clones and the amount of new baby clones propagated each month! </p>
                        </div>
                        <div className="Doom">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Months Since Lindsey Moved Out</th>
                                        <th>Number of Baby Clones</th>
                                        <th>Number of Adult Clones</th>
                                        <th>Total Population</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>17</td>
                                        <td>11</td>
                                        <td>3</td>
                                        <td>14</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>18</td>
                                        <td>14</td>
                                        <td>4</td>
                                        <td>18</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>19</td>
                                        <td>18</td>
                                        <td>5</td>
                                        <td>23</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>20</td>
                                        <td>23</td>
                                        <td>6</td>
                                        <td>29</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>21</td>
                                        <td>29</td>
                                        <td>7</td>
                                        <td>36</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>22</td>
                                        <td>36</td>
                                        <td>8</td>
                                        <td>44</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>23</td>
                                        <td>44</td>
                                        <td>9</td>
                                        <td>53</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>24</td>
                                        <td>53</td>
                                        <td>11</td>
                                        <td>64</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <p>Our population becomes a little more difficult to track starting from month 17. Every month, our number of baby clones increases by the number of adult clones dropping leaves. However, our number of adult clones is also growing each month, because the babies from 8 months ago are also becoming mature and starting to propagate baby clones of their own. This leads to our population starting to increase more rapidly, which leads me to begin really wanting a formula to help predict how many succulents I will have each month.</p>
                        </div>
                    </div>
                    <div className="Formula">
                        <h3 className="subHeader">Finding the Formula:</h3>
                        <p>For a shortcut in telling how many baby Sebum rubrotinctum clones we will have in each coming month (F<sub>n</sub>), I can use recursion by looking at the number in our total population of clones from the month before. Last month, we had a certain number of baby clones, and we also had a certain number of adult clones. Since every one of the adult clones will drop exactly one baby clone, a head count of every clone from last month corresponds with the number of baby clones we can expect next month.</p>
                        <p>We will call this term F<sub>n-1</sub></p>
                        <p>To find how many adult Sebum clones we will have in each coming month, I can use recursion again. We know that it takes 8 months for a baby clone to completely mature. Therefore, if we look at the total population of clones from 8 months ago, we know that every one of those clones is now an adult.</p>
                        <p>We will call this term F<sub>n-8</sub></p>
                        <p>F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-8</sub></p>
                        <p>I can add together my adult clone population and my baby clone population to find each month’s total clone population.</p>
                        <p>But what does that look like over time?</p>
                        <img src={maryGraph} alt="graph of estimated clone population over time" style={{ width: 50 + '%', height: 'auto', borderRadius: 5, marginLeft: 25 + '%' }} />
                    </div>
                    <div className="Doom">
                        <table>
                            <thead>
                                <tr>
                                    <th>Years Since Lindsey Moved Away</th>
                                    <th>Total Succulent Clones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>6</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td>64</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>3</td>
                                    <td>786</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>4</td>
                                    <td>9661</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>5</td>
                                    <td>118212</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>6</td>
                                    <td>1445995</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>7</td>
                                    <td>17689720</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>8</td>
                                    <td>216412235</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>9</td>
                                    <td>2647534488</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>10</td>
                                    <td>32389272248</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>11</td>
                                    <td>3.96242E+11</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>12</td>
                                    <td>4.84753E+12</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>13</td>
                                    <td>5.93034E+13</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>14</td>
                                    <td>7.25504E+14</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>15</td>
                                    <td>8.87563E+15</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>16</td>
                                    <td>1.08582E+17</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>17</td>
                                    <td>1.32837E+18</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>18</td>
                                    <td>1.62509E+19</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>19</td>
                                    <td>1.9881E+20</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>20</td>
                                    <td>2.43219E+21</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <p>This population increases so steeply, it almost looks like an exponential curve!</p>
                        <p>In a hypothetical world where my assumptions from earlier prove true, where plants always keep growing at the same rate and never die, my model helps me make the following prediction of the future: </p>
                        <p>This year, I have 6 succulents.</p>
                        <p>In three years, I will have to find pots for nearly 800 succulents.</p>
                        <p>In ten years, I could give a present of four succulents to every human on the planet. </p>
                        <p>In fifteen years, I could give a present of one succulent to every ant on the planet. </p>
                        <p>In twenty years, I will have as many succulents as there are grains of sand on all the beaches in the world. Thus my world domination will be complete.</p>
                    </div>
                    <div>
                        <img src={succGlobe} alt="recreation of the globe using succulents" style={{ width: 50 + '%', height: 'auto', borderRadius: 5, marginLeft: 25 + '%' }} />
                    </div>
                    <div>
                        <p>This population growth model is a variation of Fibonacci’s rabbit puzzle, a famous hypothetical scenario where a pair of immortal rabbits produce a new pair of babies every month who grow to maturity in one month and begin having pairs of babies themselves. The pattern created is known as the Fibonacci sequence, one of the most interesting patterns mathematicians have ever found. To learn more about the Fibonacci sequence and the fascinating patterns therein, I recommend this site created by Dan Reich at Temple University. <a href='https://math.temple.edu/~reich/Fib/fibo.html'>(Link)</a></p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Math;