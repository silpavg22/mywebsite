import React from 'react';

const workexperience = () => {
    return (
        <section id="projects" className="wrapper style3 special">
						<div className="inner">
						<header className="major">
								<h2>Work Experience</h2>
								<p></p>
							</header>
							<ul className="features">

								<li>
								{/* <i className="proj_icon fas fa-code"></i>  */}
								<h3>Senior Software Engineer - IBS SOFTWARE</h3>
									<p>Worked on iCargo project which is an air cargo management platform. Built web applications for handling seamless cargo 
checkin services and it helps clients to track the crew. Also worked on the android application for iCargo</p>
                                    {/* <p>ASP.NET MVC 5| Entity Framework | JQuery |Bootstrap |NET Framework 4.7 |VS 2017 |MS SQL Server</p> */}
								</li>

								<li>
                                    <h3>Software Engineer - National Informatics Centre</h3>
									<p>Worked on project Secure which is used for the cost estimation and approval of works undertaken by the government. Designed and 
										implemented functionalities for adding the requirements, cost calculation etc.</p>
								</li>
								
								
        						</ul>
						</div>
					</section>    


    );
};

export default workexperience;