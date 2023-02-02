import React from 'react';

const projects = () => {
    return (
        <section id="projects" className="wrapper style3 special">
						<div className="inner">
							<header className="major">
								<h2>Academic Projects</h2>
								<p>Technology Stack<br/>
								Python | PHP | Laravel | SQL | React JS | Javascript | HTML | GitHub</p>
							</header>
							<ul className="features">

								<li>
								{/* <i className="proj_icon fas fa-code"></i>  */}
								<a href="https://github.com/silpavg22/OneMartApp"><h3>One Mart</h3></a>
									<p>A student marketplace where students can buy/sell products ,create posts, form/leave clubs etc.</p>
                                    {/* <p>ASP.NET MVC 5| Entity Framework | JQuery |Bootstrap |NET Framework 4.7 |VS 2017 |MS SQL Server</p> */}
								</li>

								<li>
                                    <a href="https://github.com/silpavg22/RedisAWS"><h3>Data Repository Performance</h3></a>
									<p>To measure and compare the performance of retrieving data using SQL and redis cache in AWS</p>
								</li>
								
								<li>
                                    <a href="https://github.com/silpavg22/Cloud-Gallery"><h3>Cloud Gallery</h3></a>
									<p>Implemented a image gallery in MIcrosoft Azure making use of the cloud services </p>
								</li>
                                
                                <li>
                                    <a href="https://github.com/silpavg22/KabbadiWinnerPredictor"><h3>Winner Prediction</h3></a>
									<p>Predicting the winner of a kabbadi match using Logistic Regression Algorithm.</p>
								</li>

								
                                <li>
                                    <a href="https://github.com/silpavg22/VisualizeGoogleCharts"><h3>Data Visualization using Google Charts</h3></a>
									<p>To visualize and display the results from SQL table within a browser, allow a user to select intervals or attributes in a data set, 
show results as a pie chart, a histogram, or a scatter or point chart.</p>
								</li>

								<li>
                                    <a href="https://github.com/silpavg22/OnlineTestApp"><h3>Online Test Application</h3></a>
									<p>An timer based online grading system with admin, tutor and student where teacher are able to create question and student can answer them. There is also a provison for teachers to grade them. Done using 3 AWS instances for security..</p>
								</li>
        						</ul>
						</div>
					</section>    


    );
};

export default projects;