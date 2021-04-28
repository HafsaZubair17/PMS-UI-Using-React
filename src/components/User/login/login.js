import React, {Component} from 'react';
import { useState } from "react";
import Register from '../Register/Register';
import ForgotPass from '../ForgotPass/ForgotPass';
import MainDashboard from '../../Dashboard/MainDashboard';
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core';
import { Dialog, DialogContent } from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControl from '@material-ui/core/FormControl';

const Login=()=>{

    //const [Log, setLog] = useState(true);
    const [Reg, setReg] = useState(false);
    const [Pass, setPass] = useState(false);
    const [Dash, setDash] = useState(false);
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"};
    const avatarStyle={backgroundColor:'Blue'};
    const btnStyle={margin:'8px 0',backgroundColor:'Blue'};
    const btn={margin:'8px 0',backgroundColor:'#add8e6'};

    // var state={
    //     username:"",
    //     password:"",
    //     nameError:"",
    //     passError:""
    // };



    
    return(
        <>
        <Grid>
            <Paper className="paperStyle" style={paperStyle}>
                <Grid align='center'>
                     <Avatar className="avatarStyle" style={avatarStyle}><AccountCircle/></Avatar>
                    <h2>Login</h2>
                </Grid>
                <FormControl fullWidth required >
                <TextField  name="username" 
                            label='Username' 
                            placeholder='Enter username' 
                            // value={this.state.username}
                            // onChange={this.handleChange}
                            fullWidth required
                />
                </FormControl>
                {/* <div style={{color:"red", fontSize:12}}>{this.state.nameError}</div> */}
                <TextField name="password" 
                            label='Password' 
                            placeholder='Enter password' 
                            type='password' 
                            // value={this.state.password}
                            // onChange={this.handleChange}
                            fullWidth required
                />
                {/* <div style={{color:"red", fontSize:12}}>{this.state.passError}</div> */}

                <Button type='submit' 
                        variant="contained" 
                        className="btnstyle" 
                        style={btnStyle}fullWidth 
                        onClick={()=>setDash(true)}>Login
                </Button>

                <Typography >
                     <Button style={btn} onClick={()=>setPass(true)}>
                     Forgot Password 
                     </Button>
                </Typography>
                <Typography >
                     <Button style={btn} onClick={()=>setReg(true)}>
                     Register New User
                     </Button>
                </Typography>
            </Paper>
        </Grid>

        <Dialog open={Reg} fullScreen>
          <DialogContent>
            <Register
              setReg={setReg}
            />
          </DialogContent>
        </Dialog>

        <Dialog open={Pass} fullScreen>
          <DialogContent>
            <ForgotPass
              setPass={setPass}
            />
          </DialogContent>
        </Dialog>

        <Dialog open={Dash} fullScreen>
          <DialogContent>
            <MainDashboard
              setDash={setDash}
            />
          </DialogContent>
        </Dialog>
</>

    );
}

export default Login