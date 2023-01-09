import React from 'react';
import Icon from '@material-ui/core/Icon';

const intro = () => {
    return (
        <div className="highlight_wrapper"
        style={{
            //height:`${window.innerHeight}px`,
            overflow:`hidden`,
            //background:`#505393`,
            marginTop:`90px`
        }}
        >
<section id="one" className="wrapper style1 special">
						<div className="inner">
							<header className="major">
								<h2>About Me<br/>
								</h2>
								<p>I am a Computer Science graduate student at the University of Texas at Arlington having 3.7 years of prior experience developing web applications using Spring MVC.
                                <br/>
                               
                                </p>
							</header>
                            <div>
                            <ul className="icons intro_icons">
        <li className="intro_icons_li">
        {/* <Icon className={'icon fab fa-laptop'}  style={{fontSize: `3em`}}/> */}
        <i className=" fas fa-laptop" style={{fontSize: `2.5em`}}></i> 
    
        <h3>Area of Interest</h3>
        <p>Cloud Computing, Web Development, Security</p>
        </li>
        <li className="intro_icons_li">
        {/* <Icon className={'icon fab fa-code'}  style={{fontSize: `3em`}}/> */}
         <i className=" fas fa-code" style={{fontSize: `2.5em`}}></i> 
       
        <h3>Languages</h3>
        <p> Java, Python, PHP, JavaScript, C++, C</p>
        </li>

        {/* <li className="intro_icons_li"><span className="icon fa-terminal" style={{fontSize: `3em`}}></span>
   
        <h3>Tools</h3>
        <p>something</p>
        </li> */}
    </ul>
                            </div>
                	</div>
				</section>
        </div>
    );
};

export default intro;