import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import Level2 from './Level2.js'
import DeleteIcon from '@material-ui/icons/Delete';

class Level1 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      open:this.props.open
    }
    this.state.path=this.props.data.title;
  }
  toggleFolderStatus(){
    this.setState({
      open : !this.state.open
    }    )
    this.props.folderClick(this.props.data,this.state.path,1);
  }
  render(){
    return( <div>
<ListItem  button >
      <ListItemIcon onClick={()=>{this.toggleFolderStatus()}}>
      {this.state.open ?  <FolderOpenIcon /> :  <FolderIcon />}

      </ListItemIcon>
      <ListItemText inset primary={this.props.data.title} onClick={()=>{this.toggleFolderStatus()}} />
      <ListItemIcon >
      <DeleteIcon onClick={()=>{this.props.deleteFolder(this.props.index)}}></DeleteIcon>
      </ListItemIcon>
    </ListItem>
    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
        <Level2 open={false} title="Game play resources" data={this.props.data["Game play resources"]} folderClick={this.props.folderClick} path={this.state.path}></Level2>
   </Collapse>
    </div> 
    );
  }
}
export default Level1