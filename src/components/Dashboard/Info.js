import React from "react";
import { useState } from "react";
import LeftDrawer from "./LeftDrawer";
import MainDashboard from "./MainDashboard"
import AddProject from "./AddProject";
import { Grid, Typography, TextField, Button, Dialog, DialogContent, Avatar} from "@material-ui/core";


export default function Infor({setOpen}) {
    const [Dash, setDash]= useState(false);

return(
    console.log("lol"),
    <>
        <Grid container spacing={3}>
        <Grid item xs={2} sm={2} md={4} lg={4}>
        <LeftDrawer setOpen={setOpen} />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} fullScreen style={{ marginLeft: 350 }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>

          
        <Typography variant="h5" style={{ marginLeft: 150, marginTop:30,marginBottom:30, display: 'flex' }} >
              <Avatar style={{ marginRight: 15}} />
              React Project
        </Typography>
        <hr></hr>

        <Grid style={{ marginLeft: 70, marginTop:30}}>
        <Typography variant="h6" style={{marginBottom:10}} >
            Project Detail
        </Typography>
        <Typography variant="p" style={{ marginRight: 50}} >
            This is a dummy text for an imaginary project in react. This is lorem ipusm etc etc. This is a dummy text for an imaginary project in react. This is lorem ipusm etc etc. 
        </Typography>


        <Typography variant="h6" style={{marginBottom:15,marginTop:50}} >
            Comments
        </Typography>

        <TextField 
            required
            multiline
            rows={3}
            name="comment"
            variant="filled"
            placeholder='Comments'
            style={{width: 900,marginBottom:30 }}>

        </TextField>

        <Grid container item xs={12} sm={12} md={12} lg={12} justify="flex-end">
          <Button
            variant="contained"
            style={{ margin:10, width:80 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="blue"
            style={{ marginTop: 10, marginBottom: 10, marginRight: 50, backgroundColor:'Blue',width:80 }}
          >
            Add
          </Button>
        </Grid>

        </Grid>

        
        
        <Grid container item xs={12} sm={12} md={12} lg={12} justify="flex-end">

        <Button onClick={()=>setDash(true)} style={{ marginRight: 50,backgroundColor:'#add8e6' }}>
            Close
        </Button>
        </Grid>
        </Grid>
        </Grid>



        </Grid>

        <Dialog open={Dash} fullScreen>
          <DialogContent>
            <MainDashboard
              setDash={setDash}
            />
          </DialogContent>
        </Dialog>

        
        {/* <Dialog open={open} fullScreen style={{ marginLeft: 350 }}>
          <DialogContent>
            <AddProject
              values={values}
              setValues={setValues}
              setOpen={setOpen}
              addData={addData}
            />
          </DialogContent>
        </Dialog> */}
    </>

);
}