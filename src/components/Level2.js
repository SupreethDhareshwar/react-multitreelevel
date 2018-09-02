import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import List from '@material-ui/core/List';
import Level3 from './Level3.js';

class Level2 extends React.Component{
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
    this.props.folderClick(this.props.data,this.state.path,2);
  }
  render(){
    return(   <List component="div" disablePadding>
    <ListItem button className="nestedLevel2" onClick={()=>{this.toggleFolderStatus()}}>
      <ListItemIcon>
      {this.state.open ?  <FolderOpenIcon /> :  <FolderIcon />}
      </ListItemIcon>
      <ListItemText inset primary={this.props.title} />
    </ListItem>
     <Collapse in={this.state.open} timeout="auto" unmountOnExit>
<Level3 key="l21" open={false} data={this.props.data["Installation"]} title="Installation" folderClick={this.props.folderClick} path={this.state.path} ></Level3>
<Level3 key="l22" open={false} data={this.props.data["Resource Dependency"]} title="Resource Dependency" folderClick={this.props.folderClick} path={this.state.path} ></Level3>

</Collapse>
  </List>);
  }
}
export default Level2