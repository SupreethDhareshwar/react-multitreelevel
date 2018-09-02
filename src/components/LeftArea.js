import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Level1 from './Level1.js'
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '35%',
    marginTop: theme.spacing.unit * 3,
    marginLeft:theme.spacing.unit*3,
    paddingLeft:theme.spacing.unit*3,
    paddingRight:theme.spacing.unit*3,
    display:'inline-block'
  },
  addStyle:{
    float:'right',
    fontSize:'2em',
    cursor:'pointer'
  }
});



class LeftArea extends React.Component {

  constructor(props){
    super(props);
    this.state={
      dialogOpen:false,
      treeData:[]
    };
  }
  handleClickOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };
  handleCloseandAddFolder = () => {
    let elem=(document.getElementById("name"));
    console.log(elem.value);
    if(elem.value !== ""){
      this.setState(prevState => ({
        treeData: [{
          "title": elem.value,
            "Game play resources":
              {
                "Installation": [],
                "Resource Dependency": []
              }
      },...prevState.treeData]
      })
    )
    }
    this.setState({ dialogOpen: false });
  }
  deleteFolder=(index)=>{
    var arr = [...this.state.treeData]; 
    arr.splice(index, 1);
    this.setState({treeData: arr});
  }
  render() {
    const { classes } = this.props;
    return(
      <Paper className={classes.root}>
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">ADD NEW FOLDER</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add new folder, Enter Name of Folder and it will be added to bottom of the folder tree list
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Folder Name"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} >
              Cancel
            </Button>
            <Button onClick={this.handleCloseandAddFolder} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
        <List
          component="nav"
          subheader={<ListSubheader component="div">Folders 
          <AddIcon className={classes.addStyle} onClick={()=>{this.handleClickOpen()}}></AddIcon>
          </ListSubheader>}
        >
      {
        this.state.treeData.map((folder,ind)=>{
        return(
 
       <Level1 deleteFolder={this.deleteFolder} index={ind} key={ind} data={folder} open={false} folderClick={(data,path,level)=>this.props.sendTreeData(data,path,level)}></Level1>
        
        )
      })
    }
    </List>
</Paper>
    );
  }
  componentDidMount(){
    fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/long_game_tree77fa4dd.json",
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors"
    }
  ) // Call the fetch function passing the url of the API as a parameter
    .then((response)=> {
        response.json().then((data)=>{
           this.setState({
             treeData:data
           })
        });
     
        // Your code for handling the data you get from the API
    })
    .catch(function(error) {
        // This is where you run code if the server returns any errors
    });
  }
}
LeftArea.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(LeftArea);
