//src/components/Home.js
import React, { Component } from 'react';
import LeftArea from './LeftArea';
import RightArea from './RightArea';

export default class Home extends Component{
constructor(props){
  super(props)
  this.state={
    selectedFolderTree : {
      data : [],
      path : "",
      level:0
    }
 }
 this.getTreeData=this.getTreeData.bind(this);
}
getTreeData(obj,path,level){
  this.setState({
    'selectedFolderTree':{
      data : obj,
      path : path,
      level : level
    }
  });
}  
render(){
  return(
    <div>
      <LeftArea sendTreeData={ this.getTreeData } />
      <RightArea tree={this.state.selectedFolderTree}/>
    </div>
  )
}
}


