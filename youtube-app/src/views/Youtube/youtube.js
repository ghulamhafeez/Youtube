import * as React from "react";

import Grid from "@mui/joy/Grid";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { Tabs } from "./Tabs";
export const Youtube = () => {
  return (
    <Grid container direction={"column"}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ height: "70px" }}

      >
        <Header />
      </Grid>
      <Grid item container display={"flex"}>
        <Grid
          item
          container
          direction={"column"}
          xs={0}
          sm={2}
          md={2}
          lg={2}
        
          pl={1}
        >
          <Sidebar />
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          xs={10}
          sm={10}
          md={10}
          lg={10}
        >
          <Grid item sx={{ height: "50px" }}>
            <Tabs />
          </Grid>
          <Grid item  sx={{ height: "500px" }}>
            <Main />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
