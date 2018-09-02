import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import List from '@material-ui/core/List';
import Level4 from './Level4.js';

class Level3 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      open:this.props.open
    }
    this.state.path=this.props.path+"/"+this.props.title;
  }
  toggleFolderStatus(){
    this.setState({
      open : !this.state.open
    }    )
    this.props.folderClick(this.props.data,this.state.path,3);
  }
  render(){
    return(    <List component="div" disablePadding>
    <ListItem button className="nestedLevel3" onClick={()=>{this.toggleFolderStatus()}}>
      <ListItemIcon>
      {this.state.open ?  <FolderOpenIcon /> :  <FolderIcon />}
      </ListItemIcon>
      <ListItemText inset primary={this.props.title} />
    </ListItem>
    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
 
    { this.props.data.map((file,ind)=>{
return (
   
     <Level4 key={ind} data={file} folderClick={this.props.folderClick} path={this.state.path} ></Level4>
     )
}
  
) } 
</Collapse>

  </List>);
  }
}
export default Level3