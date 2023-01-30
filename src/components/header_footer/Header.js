import React, { Component } from 'react';
import '../../App.css'


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';
import ProfilPic from '../../images/Silpa.jpeg'
import Background from '../../images/tech.jpg'

class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
    }

    //Event listerner and componentDidUnMount when using differene pages
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                headerShow: true
            })
        }
        else {
            this.setState({
                headerShow: false
            })
        }
    }


    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    render() {
        return (
            <div>
                <AppBar
                    position="fixed"
                    style={{
                        backgroundColor: this.state.headerShow ? '#2f2f2f' : 'black',
                        boxShadow: 'none',
                        padding: '10px 0px',
                        height: '90px'
                    }}
                >
                    <Toolbar>

                        <div className="header_logo">
                            <div className="font_righteous header_logo_venue"><h2 style={{ margin: `0em` }}>Silpa Vijayan Geetha</h2></div>
                            {/* <div className="header_logo_title">MS in Computer Science</div> */}
                        </div>

                        <IconButton
                            aria-label="Menu"
                            color="inherit"
                            onClick={() => this.toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <SideDrawer
                            open={this.state.drawerOpen}
                            onClose={(value) => this.toggleDrawer(value)}

                        />

                    </Toolbar>
                </AppBar>

                <div className="row home-content__main" style={{  backgroundImage: `url(${Background})`,backgroundRepeat: 'no-repeat'}}>
 }}>
                    <img src={ProfilPic} alt="test" style={{ width: "35%", height: "45%", paddingTop: "17%",position: "relative" ,left :"133px"}} />
                    
                    <h2 style={{ color: "aliceblue", marginTop: "-20%", marginLeft: "48%" , fontFamily:"Georgia",fontSize:"26px"}}>
                        Silpa Vijayan Geetha
                    </h2>

                    <h6 style={{ marginTop: "-17%", marginLeft: "49%" ,fontFamily:"Georgia",fontSize:"16px"}}>Master's in Computer Science</h6>
                    <h6 style={{ marginTop: "-15%", marginLeft: "49%" ,fontFamily:"Georgia",fontSize:"16px"}}>University Of Texas Arlington</h6>

                    <h6 style={{ marginTop: "-13%", marginLeft: "49%" ,fontFamily:"Georgia",fontSize:"16px"}}>Senior Software Engineer </h6>

                    <div className="home-soc" id="content-mobile_icons" >

                        <p style={{ fontSize: "200%", marginTop: "9%" }}>
                            <a className="btn btn-animatedbg" style={{ textAlign: "center", padding: "3px", fontSize: "large", left: "746px", bottom:"204px",position: "relative" }} 
                            href="files/Resume.pdf" target="_blank" download="Resume"><button className="btn"><i class="fa fa-download"></i> Download Resume</button></a>
                        </p>
                    </div>

             
                </div>
            </div>
        );
    }
}

export default Header;