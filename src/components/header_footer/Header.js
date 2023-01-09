import React, { Component } from 'react';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';


class Header extends Component {

    state={
        drawerOpen:false,
        headerShow:false
    }

    //Event listerner and componentDidUnMount when using differene pages
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }

    handleScroll=()=>{
        if(window.scrollY >0)
        {
            this.setState({
                headerShow:true
            })
        }
        else{
            this.setState({
                headerShow:false
            })
        }
    }

    
    toggleDrawer= (value) =>{
        this.setState({
            drawerOpen:value
        })
    }

    render() {
        return (
            <div>
            <AppBar              
            position="fixed"
             style={{
                 backgroundColor:this.state.headerShow ? '#2f2f2f':'black',
                 boxShadow:'none',
                 padding:'10px 0px',
                 height:'90px'
             }}
             >
              <Toolbar>

                <div className="header_logo">
                        <div className="font_righteous header_logo_venue"><h2 style={{ margin:`0em`}}>Silpa Vijayan Geetha</h2></div>
                        {/* <div className="header_logo_title">MS in Computer Science</div> */}
                </div>
                
                <IconButton
                   aria-label="Menu"
                   color="inherit"
                   onClick={()=>this.toggleDrawer(true)}
                 >
                    <MenuIcon />
                    </IconButton>
                    <SideDrawer
                   open={this.state.drawerOpen}
                   onClose={(value)=>this.toggleDrawer(value)}
            
                    />
             
              </Toolbar>            
            </AppBar>
          </div>
        );
    }
}

export default  Header;