import * as React from "react";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
export const Youtube = () => {
  return (
    <Grid container>
      <Grid
        item
        container
        direction={"column"}
        xs={0}
        sm={2}
        md={2}
        lg={2}
        bgcolor="grey"
     
      >
        <Typography level="h2"> SideBar </Typography>
      </Grid>
      <Grid
        item
        container
        direction={"column"}
      
        xs={12}
        sm={10}
        md={10}
        lg={10}
        spacing={1}
      >
        <Grid item bgcolor="red" sx={{ height: "60px" }}>
          <Typography level="h2"> Header </Typography>
        </Grid>

        <Grid item bgcolor="yellow" sx={{ height: "40px" }}>
          <Typography level="h2">Tabs </Typography>
        </Grid>
        <Grid item bgcolor="green" sx={{ height: "500px" }}>
          <Typography level="h2">Main </Typography>

          <Grid
            item
            container
            pt={2}
            gap={2}
            display={"flex"}

          >
            <Grid bgcolor="white"  xs={12} sm={4} md={3} lg={2} sx={{ height: "150px" }}>
              1
            </Grid>
            <Grid bgcolor="white"   xs={12} sm={4} md={3} lg={2} sx={{ height: "150px" }}>
              2
            </Grid>
            <Grid bgcolor="white"  xs={12} sm={4} md={3} lg={2} sx={{ height: "150px" }}>
              3
            </Grid>
            <Grid bgcolor="white"   xs={12} sm={4} md={3}  lg={2} sx={{ height: "150px" }}>
              4
            </Grid>
            <Grid bgcolor="white"  xs={12} sm={4} md={3}  lg={2} sx={{ height: "150px" }}>
              5
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
