import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export default function ListItems(props){

    const handleClick=(ShowData)=>{
        props.handle_Components(ShowData);
        }
    return(
        <div>
            <ListItem button  onClick={()=>handleClick(0)}>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            </ListItem>

            {/* <ListItem button onClick={()=>handleClick(1)}>
           <ListItemIcon>
            <ShoppingCartIcon />
           </ListItemIcon>
           <ListItemText primary="Hero Banner" />
          </ListItem>

        <ListItem button onClick={()=>handleClick(2)}>
           <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Abandoned Cart" />
        </ListItem> */}
        </div>
    )
} 
 
 