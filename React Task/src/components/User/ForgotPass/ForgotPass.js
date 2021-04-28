import React from 'react'
import { useState } from "react";
import { Grid,Paper, Avatar, TextField, Button} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Login from '../login/login';
import { Dialog, DialogContent } from "@material-ui/core";

const ForgotPass=()=>{
    const [Log, setLog] = useState(false);

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'Blue'}
    const btnStyle={margin:'8px 0',backgroundColor:'Blue'}
    //const cen={display: 'flex', alignItems: 'center', justifyContent: 'center'};
    return(
        <>
        <Grid>
            <Paper className="paperStyle" style={paperStyle}>
                <Grid align='center'>
                     <Avatar className="avatarStyle" style={avatarStyle}><AccountCircle/></Avatar>
                    <h2>Reset Password</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='New Password' placeholder='New Password' type='password' fullWidth required/>
                <TextField label='Re-enter Password' placeholder='Re-enter Password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" className="btnstyle" style={btnStyle}fullWidth onClick={()=>setLog(true)}>Change Password</Button>
            </Paper>
        </Grid>
        <Dialog open={Log} fullScreen>
        <DialogContent>
          <Login
            setLog={setLog}
          />
        </DialogContent>
      </Dialog>
      </>
    )
}

export default ForgotPass;