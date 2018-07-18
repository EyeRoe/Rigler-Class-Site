import React, { Component } from 'react';
import Globe from '../assets/globe.jpg';
class ALI extends Component {

    render() {
        return (
            <div className="container">
                <h1>Active Learning Investigation</h1>
                <img src={Globe} alt="globe" style={{ width: 50+'%', height: 'auto' }}/>
                <div className="title">
                    <h3>Projections Shift Perspectives</h3>
                    <h2>An Active Learning Investigation in Cartography</h2>
                    <p>by Mary Rigler and Dana Cavin</p>
                </div>
                <div className="Essay">
                    <div className="Overview">
                        <h3>Overview</h3>
                        <p>Name of the investigation: Cartography – Projections Shift Perspectives</p>
                        <p>Approximate grade level or grade range: 6th – 7th grade; Math focus.</p>
                        <p>Approximate time frame for the investigation: One class period, 45-50 minutes (may expand to two periods using additional scaffolding or extensions)</p>
                    </div>
                    <div className="Summary">
                        <h3>Summary</h3>
                        <p>What students will do:</p>
                        <p>Students will use their math skills of finding the area of triangles and rectangles to find the area of two land masses (continents or Greenland) on maps with two commonly used, map projections. Students will begin by finding the area of sample complex shapes by decomposing them into triangles and rectangles. Then they will work in groups of four to find the approximate area of the continental land masses and Greenland. This will require them to break up each land mass into simple shapes, find the cumulative area, and convert the area measured on the map in square centimeters to the area in square miles represented by the scale provided. They will then explore questions about map projections and how different projections impact our understanding of the relative size of the land masses.</p>
                        <p>What students will learn:</p>
                        <p>The students will learn three key concepts in this activity.</p>
                        <ol>
                            <li>Students will demonstrate their ability to find the area of complex shapes by breaking them down into smaller, simpler shapes.</li>
                            <li>Students will practice converting scaled images by calculating the actual area represented by the map, using the scale provided on the maps.</li>
                            <li>Students will explore how the decisions made by the cartographer (such as the selected projection) influence the perception of the viewer. This can be connected to other contexts where the author of a story or a scientific study make decisions that influence the perception of the reader or the outcome of the study.</li>
                        </ol>
                    </div>
                    <div className="Rationale">
                        <h3>Rationale and Relationship to Standards</h3>
                        <h4>Important Concepts & Relevant Common Core Standards</h4>
                        <div>
                            <h4>Concept 1:</h4>
                            <h4>Students will break complex 2-dimensional shapes into simple shapes and calculate the approximate area.</h4>
                            <div>
                                <p>Math Content 6.G.A.1: </p>
                                <p>Find the area of right triangles, other triangles, special quadrilaterals, and polygons by composing into rectangles or decomposing into triangles and other shapes; apply these techniques in the context of solving real-world and mathematical problems.</p>
                                <p>Math Content 7.G.B.6:</p>
                                <p>Solve real-world and mathematical problems involving area, volume and surface area of two- and three-dimensional objects composed of triangles, quadrilaterals, polygons, cubes, and right prisms.</p>
                                <p>Mathematical Practices #6</p>
                                <p>Look for and make use of structure.</p>
                            </div>
                        </div>
                        <div>
                            <h4>Concept 2:</h4>
                            <h4>Students will convert the area of the shape on the map to the actual size of the land masses using the scale provided on the map.</h4>
                            <div>
                                <p>Math Content 7.G.A.1:</p>
                                <p>Solve problems involving scale drawings of geometric figures, including computing actual lengths and areas from a scale drawing and reproducing a scale drawing at a different scale.</p>
                            </div>
                        </div>
                        <div>
                            <h4>Concept 3:</h4>
                            <h4>Students will investigate the impacts of decisions made by cartographers and be able to discuss how the different projections impact how we visualize the world.</h4>
                            <div>
                                <p>Mathematical Practices #3</p>
                                <p>Construct viable arguments and critique the reasoning of others.</p>
                                <p>Mathematical Practices #4</p>
                                <p>Use appropriate tools strategically.</p>
                            </div>
                        </div>
                    </div>
                    <div className="Relevance">
                        <h3>Relevance to Students' Lives</h3>
                        <div>
                            <p>This lesson connects to students’ lives because maps and scaled drawings are something that they have and/or will encounter in their daily lives. While this lesson focuses on finding the area of complex shapes by breaking them into simpler shapes, it has the bonus of applying this skill to real tools that are used in many fields of everyday life.</p>
                            <p>Additionally, by comparing the two projections, the students practice using critical thinking. They will be encouraged to think about how decisions made by cartographers might impact the way that we see and experience the world. This could be tied into other activities that encourage students to learn more about sources and bias. Additionally, the lesson can be linked to decisions that they make when setting up science experiments and solving real-world math problems.</p>
                        </div>
                    </div>
                    <div className="Description">
                        <h3>Description</h3>
                        <div>
                            <h4>Materials Needed</h4>
                            <ul>
                                <li>PowerPoint with different map projections (lesson “hook”) <a href='https://redhawks-my.sharepoint.com/:b:/g/personal/cavindana_seattleu_edu/ETbgbTanyk1Bvuf0hKg09r4BzTH575tbUwkT6Qzb4cU1bw?e=JAvKx1'>(Link)</a></li>
                                <li>Scratch paper and pencil for teacher – to draw and model how to find area of complex shapes</li>
                                <li>Pencil</li>
                                <li>A copy of each map per student (2 maps per student – one of each projection) <a href='https://redhawks-my.sharepoint.com/:b:/g/personal/cavindana_seattleu_edu/EcaSeR29XbJKoTRvZdp6j04BUYftfOAIluZ5RvlBm3oSIQ?e=ciAgGZ'>(Link)</a></li>
                                <li>Scratch paper for calculations</li>
                                <li>Centimeter ruler for each student</li>
                                <li>Calculator for each student (for converting the scale)</li>
                                <li>Worksheet for each student <a href='https://redhawks-my.sharepoint.com/:b:/g/personal/cavindana_seattleu_edu/Edn_zeivb9dCk3ka0hvrw5ABBmXKO2QMRbauA8W0MCJ7tA?e=e3gVlR'>(Link)</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Prep Work</h4>
                            <p>Teacher must print out a pair of maps and a worksheet for each student and gather the materials.</p>
                        </div>
                        <div>
                            <h4>Steps for the Lesson</h4>
                            <div className="Doom">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="largeRow">Teacher Does</th>
                                            <th className="largeRow">Students Do</th>
                                            <th className="smallRow">Time for Task</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="largeRow">Show students the PowerPoint of different map projections. Ask students to provide observations and thoughts about the various maps. What do they notice? What “should” a map look like? Why might these maps be different? Are any of them accurate models of the earth? Why or why not?</td>
                                            <td className="largeRow">Students respond to class discussion with their observations of the maps.</td>
                                            <td className="smallRow">5 mins</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td className="largeRow">Pass out scratch paper to students.</td>
                                            <td className="largeRow">Students help pass papers.</td>
                                            <td className="smallRow">1 min</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td className="largeRow">Draw a complex shape on the doc-cam. Model how to find the area of this shape.</td>
                                            <td className="largeRow">Students work on their own to find the area and check their work with the teacher’s modeling.</td>
                                            <td className="smallRow">2 mins</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td className="largeRow">Draw a second complex shape on the doc-cam. Ask students to find the area of the shape.</td>
                                            <td className="largeRow">Students find the area of this shape on their own. If time permits, students can explain how they got their answer.</td>
                                            <td className="smallRow">2 mins</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td className="largeRow">Pass out maps and worksheets to students. These are to be turned in at the end of the period.</td>
                                            <td className="largeRow">Students help pass papers.</td>
                                            <td className="smallRow">1 min</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td className="largeRow">Teacher models how to break a land mass into shapes and find the approximate area.
                                                Teacher models how to convert the area measured on the map to the area represented by the scale.</td>
                                            <td className="largeRow">Students follow along, decomposing the model land mass on their maps. Students practice converting the area using the scale on the map.</td>
                                            <td className="smallRow">5 mins</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td className="largeRow">Have students break into pairs to find the area of two land masses on each of the two projections.</td>
                                            <td className="largeRow">Students select the two land masses they will compare.</td>
                                            <td className="smallRow">1 min</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td className="largeRow">Instruct students to decompose their land masses and find the area. They will have about 5 minutes for each land mass.
                                                Give them time checks throughout the 20 minutes period.</td>
                                            <td className="largeRow">Students decompose the land masses and find the areas in cm2 and convert them to square miles.</td>
                                            <td className="smallRow">20 mins</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td className="largeRow">Have students spend the last five minutes of class completing the reflection questions. (Students may need to finish the exercise for homework if they need more time).</td>
                                            <td className="largeRow">Students finish the exercise and the reflection questions.</td>
                                            <td className="smallRow">5 mins</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td className="largeRow">Lead a quick discussion about what the students discovered in this exercise.</td>
                                            <td className="largeRow">Students offer opinions about what they learned.</td>
                                            <td className="smallRow">5 mins</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="References">
                                <h3>References</h3>
                                <p>This activity was adapted from a “mathalicious” lesson <a href='http://www.mathalicious.com/lessons/cartogra-fail'> (Link)</a></p>
                            </div>
                            <div className="Assessment">
                                <h3>Assessment</h3>
                                <div>
                                    <h4>Learning Target #1:</h4>
                                    <h4>I can find the area of a complex 2-dimensional polygon by decomposing it into smaller pieces.</h4>
                                    <div>
                                        <p>Evidence:</p>
                                        <p>I can decompose the polygons created by land masses into rectangles and triangles. I then use the sum of those smaller shapes to find the area of the complex shape of the land mass.</p>
                                        <p>Assessment:</p>
                                        <p>Find the approximate area of two land masses on the Robinson and Mercator projection maps. Complete the worksheet chart and show my work to do the calculation.</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>Learning Target #2:</h4>
                                    <h4>I can find the actual area represented by a scaled drawing.</h4>
                                    <div>
                                        <p>Evidence:</p>
                                        <p>Convert the area measured on the map using the scale provided on the map.</p>
                                        <p>Assessment:</p>
                                        <p>Complete the chart on the worksheet.</p>
                                    </div>
                                    <div>
                                        <h4>Learning Target #3:</h4>
                                        <h4>I can compare the difference in size of land masses when different projections (Robinson and Mercator) are used.</h4>
                                        <div>
                                            <p>Evidence:</p>
                                            <p>I can examine the differences between the areas that I calculated for two land masses on the two maps with different projections.</p>
                                            <p>Assessment:</p>
                                            <p>I completed the questions on the worksheet about how the different projections impact the area, using information that I gathered and calculated.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Adjustments">
                                <p>The lesson should reflect the abilities of your students. Below are a list of considerations that may be helpful in adapting the lesson plan outlined above to meet the needs of your students.</p>
                                <ul>
                                    <li>Measurements should be made in centimeters. Since students will be finding the approximate area, precision of measurements should reflect the level of the students. Measurements could be made to the tenths place (millimeter), ¼, or ½ centimeter.</li>
                                    <li>The teacher should provide the appropriate level of instruction for how detailed and accurate to be in dividing up the land mass into simple shapes.</li>
                                    <li>Students could do the area calculations by hand or use a calculator.</li>
                                    <li>Students could find their own measurements or work with their partners or groups to find the average of their measurements.</li>
                                    <li>After finding the area of large land masses, students could use the same skill to find the area of smaller areas, such as rooms or locations on their school campus.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ALI;