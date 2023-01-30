import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { withStyles } from '@material-ui/core/styles';

const styles = {
    paperAnchorRight: {
      backgroundColor: '#333333 !important',
    }
  };

const SideDrawer = (props) => {

    const scrollToElement = (element) =>{
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth:true,
            offset: -50
        });
        props.onClose(false )
    }
    const { classes } = props;
    return (
<Drawer anchor="right"
classes={{
    paperAnchorRight:  classes.paperAnchorRight
}}
open={props.open} onClose={()=>props.onClose(false ) } >
    <div >
        <List className="font_righteous testclass" component="nav">
            <ListItem button onClick={()=>scrollToElement('intro')}> About me
            </ListItem>

            <ListItem button onClick={()=>scrollToElement('education')}> Education
            </ListItem>

            <ListItem button onClick={()=>scrollToElement('projects')}> Projects
            </ListItem>
            
            <ListItem button onClick={()=>scrollToElement('workexperience')}> Work Experience
            </ListItem>

            <ListItem button onClick={()=>scrollToElement('achievements')}> Achievements
            </ListItem>

            <ListItem button onClick={()=>scrollToElement('contact')}> Contact
            </ListItem>
           

        </List>
    </div>
</Drawer>
    );
};

export default withStyles(styles) (SideDrawer);