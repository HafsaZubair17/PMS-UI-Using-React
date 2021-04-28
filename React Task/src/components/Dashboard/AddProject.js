import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import LeftDrawer from "./LeftDrawer";

export default function AddProject({ values, setValues, setOpen, addData }) {
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const today = new Date().toLocaleDateString()

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={2} sm={2} md={4} lg={4}>
        <LeftDrawer setOpen={setOpen} />
        </Grid>
        <Grid item xs={10} sm={10} md={12} lg={12}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3" style={{ padding: 10 }}>
            Add Project
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h6" style={{ padding: 10 }}>
            Project   Name
          </Typography>
          <TextField
            required
            name="projectName"
            variant="filled"
            style={{ padding: 10, width: 500 }}
            onChange={handleChange("projectName")}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h6" style={{ padding: 10 }}>
            Project Detail
          </Typography>
          <TextField
            required
            multiline
            rows={4}
            name="projectDetail"
            variant="filled"
            style={{ padding: 10, width: 500 }}
            onChange={handleChange("projectDetail")}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h6" style={{ padding: 10 }}>
            Project Logo
          </Typography>
          <input type="file" style={{ padding: 10 }} />
        </Grid>

        <Grid container item xs={12} sm={12} md={12} lg={12} justify="flex-end">
          <Button
            variant="contained"
            style={{ margin: 10 }}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: 10,backgroundColor:'Blue' }}
            onClick={() => {
              const newData = {
                avatar: "a",
                label: values.projectName,
                date: today,
              };
              addData(newData);
              setOpen(false);
            }}
          >
            Add
          </Button>
        </Grid>
        </Grid>
      </Grid>
    </>
  );
}
