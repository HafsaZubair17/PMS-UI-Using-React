import React, { useState } from "react";
import { Grid, Typography, Dialog, DialogContent,Button } from "@material-ui/core";
import ListTile from "./ListTile";
import AddProject from "./AddProject";
import Infor from "./Info"

export default function Dashboard({ open, setOpen }) {
  const [Info, setInfo] = useState(false);
  const [values, setValues] = useState({
    projectName: "",
    projectDetail: "",
    projectDate: "",
  });

  const [data, setData] = useState([
    { avatar: "a", label: "Project 1", date: "4/20/2021" },
    { avatar: "a", label: "Project 2", date: "4/20/2021" },
    { avatar: "a", label: "Project 3", date: "4/20/2021" },
    { avatar: "a", label: "Project 4", date: "4/20/2021" },
    { avatar: "a", label: "Project 5", date: "4/20/2021" },
    { avatar: "a", label: "Project 6", date: "4/20/2021" },
    { avatar: "a", label: "Project 7", date: "4/20/2021" },
  ]);

  const addData = (newData) => {
    let oldData = data;
    oldData.push(newData);
    setData(oldData);
  };
  return (
    (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h4" style={{ marginLeft: 150, marginTop:30 }}>
              Dashboard
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={8} lg={8}></Grid>
          <Grid container item xs={9} sm={9} md={4} lg={4} justify="flex-end">
            <Typography style={{ paddingRight: 20 }}> Sort By: Name
            </Typography>
          </Grid>
          <Grid item xs={9} sm={12} md={12} lg={12}>
            {data.map((element) => {
              return (
                <Typography style={{ marginLeft: 150 }}>
                  <Button 
                  onClick={()=>setInfo(true)}>
                    <Typography style={{ width:900 }}>
                <ListTile
                style={{backgroundColor:"Blue"}}
                  avatar={element.avatar}
                  label={element.label}
                  date={element.date}
                />
                </Typography>
                </Button>
                </Typography>
              );
            })}
          </Grid>
        </Grid>
        <Dialog open={open} fullScreen style={{ marginLeft: 350 }}>
          <DialogContent>
            <AddProject
              values={values}
              setValues={setValues}
              setOpen={setOpen}
              addData={addData}
            />
          </DialogContent>
        </Dialog>

        <Dialog open={Info} fullScreen >
          <DialogContent>
            <Infor
              setInfo={setInfo}
            />
          </DialogContent>
        </Dialog>
      </>
    )
  );
}
