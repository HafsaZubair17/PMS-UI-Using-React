import React from 'react'
import { useState } from "react";
import Login from '../login/login';
import { Dialog, DialogContent } from "@material-ui/core";
import { Grid,Paper, Avatar, TextField, Button} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';


const Register=()=>{

    const [Log, setLog] = useState(false);

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'Blue'}
    const btnStyle={margin:'8px 0',backgroundColor:'Blue'}


    return(
        <>
        <Grid>
            <Paper className="paperStyle" style={paperStyle}>
                <Grid align='center'>
                     <Avatar className="avatarStyle" style={avatarStyle}><AccountCircle/></Avatar>
                    <h2>Register</h2>
                </Grid>
                <TextField label='Full Name' placeholder='Enter Full Name' fullWidth required/>
                <TextField label='Username' placeholder='Enter Username' fullWidth required/>
                <TextField label='Email' placeholder='Enter Email' type='email' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" className="btnstyle" style={btnStyle}fullWidth onClick={()=>setLog(true)}>Sign up</Button>
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

export default Register;