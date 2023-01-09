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
								<a href="https://github.com/silpavg22/OneMartApp"><h3>Senior Software Engineer - IBS SOFTWARE</h3></a>
									<p>A student marketplace where students can buy/sell products,creating posts, forming/leaving clubs etc.</p>
                                    {/* <p>ASP.NET MVC 5| Entity Framework | JQuery |Bootstrap |NET Framework 4.7 |VS 2017 |MS SQL Server</p> */}
								</li>

								<li>
                                    <a href="https://github.com/silpavg22/RedisAWS"><h3>Software Engineer - National Informatics Centre</h3></a>
									<p>To measure and compare the performance of retrieving data using SQL and redis cache in AWS</p>
								</li>
								
								
        						</ul>
						</div>
					</section>    


    );
};

export default workexperience;