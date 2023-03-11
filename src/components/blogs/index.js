import React from 'react';
import blogpic from '../../images/titanic.jpg'

const blogs = () => {
    return (
        <section id="projects" className="wrapper style3 special">
						<div className="inner">
							<header className="major">
								<h2>BLOG</h2>
								
							</header>
							<ul className="features">

								<li>
								{/* <i className="proj_icon fas fa-code"></i>  */}
								<h3> <a href="https://medium.com/@silpavg22/titanic-survival-prediction-using-machine-learning-c69fc8172360">Titanic Survival Prediction</a></h3>
                                <img src={blogpic} alt="test" style={{ width: "110%", height: "45%",position: "relative" }} />

									<p><a href="https://medium.com/@silpavg22/titanic-survival-prediction-using-machine-learning-c69fc8172360">The blog explains about the competition on Kaggle which is used for prediction of passengers who survived from the Titanic disaster.</a></p>
                                    <p><b></b></p>

                                    {/* <p>ASP.NET MVC 5| Entity Framework | JQuery |Bootstrap |NET Framework 4.7 |VS 2017 |MS SQL Server</p> */}
								</li>

								
                                
                               
        						</ul>
						</div>
					</section>    


    );
};

export default blogs;