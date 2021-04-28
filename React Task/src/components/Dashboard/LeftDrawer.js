import React from "react";
import { useState } from "react";
import { Drawer, Typography, Button } from "@material-ui/core";
import Login from '../User/login/login';
import { Dialog, DialogContent } from "@material-ui/core";

export default function LeftDrawer({ setOpen }) {
  const [Log, setLog] = useState(false);

  return (
    <>
      <Drawer variant="permanent" open>
        <Typography variant="h5" style={{ padding: 20, fontWeight: "bold" }}>
          Project Management System
        </Typography>
        <div style={{ height: 100 }}></div>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: 50, marginLeft: 50,backgroundColor:'Blue' }}
          onClick={() => {
            setOpen(true);
          }}
        >
          Add Project
        </Button>

        <Button style={{ position: "absolute", bottom: 20, padding: 20 }}onClick={()=>setLog(true)}>
          <Typography variant="subtitle1">Sign Out</Typography>
        </Button>
      </Drawer>

      <Dialog open={Log} fullScreen>
          <DialogContent>
            <Login
              setLog={setLog}
            />
          </DialogContent>
        </Dialog>
        </>
  );
}
