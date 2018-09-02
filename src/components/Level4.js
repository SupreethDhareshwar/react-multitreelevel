import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import FileIcon from '@material-ui/icons/InsertDriveFile';

class Level4 extends React.Component{
  constructor(props){
    super(props)
    this.state={}
    this.state.path=this.props.path+"/"+this.props.data.file_name;
  }
  render(){
    return(  <List component="div" disablePadding>
    <ListItem button className="nestedLevel4" onClick={()=> this.props.folderClick(this.props.data,this.state.path,4)}>
      <ListItemIcon>
        <FileIcon />
      </ListItemIcon>
      <ListItemText inset primary={this.props.data.file_name} />
    </ListItem>
    </List>);
  }
}
export default Level4
