//src/components/RightArea.js
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RightArrow from '@material-ui/icons/ChevronRight';
import DownArrow from '@material-ui/icons/KeyboardArrowDown';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = {
    card: {
        width: '55%',
        marginLeft:'24px',
        marginTop:'24px',
        float:'right',
        marginRight:'24px'
    },
    floarRight:{
      textAlign: 'right'
    }
  };

export default withStyles(styles) (class RightArea extends Component{
 generatePath(){
   if(this.props.tree.path === ""){
      return null;
   }
   else{
     let splitPath=this.props.tree.path.split("/");
     let splitLength=splitPath.length;
 return splitPath.map((str,ind)=>{
   if((1+ind) === splitLength){
    return(<span key={ind}>
      <span>{str}</span>
      <DownArrow />
   </span>
)
   }
   else{
    return(<span key={ind}>
      <span>{str}</span>
      <RightArrow />
   </span>
)
   }
   
  })
}
 }
 generateTable(){
if(this.props.tree.path === "")
return null;
else if(this.props.tree.level === 4){
  return  <Typography gutterBottom variant="headline" component="h5">
  File Opened
</Typography>
}
else{
  console.log(this.props.tree.level);
  let tableRows=[];
  if(this.props.tree.level === 1){
    tableRows=["Game Play resources"]
  }
  else if(this.props.tree.level === 2){
    tableRows=Object.keys(this.props.tree.data)
  }
  else if(this.props.tree.level === 3){
      this.props.tree.data.forEach((obj)=>{ 
      tableRows.push(obj.file_name); })
  }
  return   <Table >
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Owner</TableCell>
      <TableCell>Last Modified</TableCell>
      <TableCell >Size</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {
     tableRows.map((row,ind) => {
      return (
        <TableRow key={ind}>
          <TableCell component="th" scope="row">
            {row}
          </TableCell>
          <TableCell >{}</TableCell>
          <TableCell >{new Date().toLocaleDateString()}</TableCell>
          <TableCell >{}</TableCell>
        </TableRow>
      );
    })
    }
  </TableBody>
  </Table>;
}

 }
render(){
    const classes = this.props.classes;
        return(
            <Card className={classes.card}>
             
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Folder Path
                </Typography>
               { this.generatePath()}
               { this.generateTable()}
              </CardContent>
         
            </Card>
        );
}
})
