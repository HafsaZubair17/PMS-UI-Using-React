import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import LeftDrawer from "./LeftDrawer";
import DashBoard from "./Dashboard";

export default function MainDashboard() {
  const [open, setOpen] = useState(false);

  return (
      <Grid container spacing={3}>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <LeftDrawer setOpen={setOpen} />
        </Grid>

        <Grid item xs={10} sm={10} md={10} lg={10}>
          {/* <Grid item xs={12} sm={12} md={12} lg={12}> */}
          <DashBoard open={open} setOpen={setOpen} />
        {/* </Grid> */}
        </Grid>
      </Grid>
  );
}
