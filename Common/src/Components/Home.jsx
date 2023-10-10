import React from "react";
import { Grid, Button } from "@mui/material";
import { useState } from "react";

export const Home = () => {
  //function returns single element-it can be div,<></>,or react fragment.

  const [ison, setIson] = useState("Bulb-OFF");
  
  return (
    <div>
      <h1>This is Home</h1>
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          {ison ? <img src="./Bulb-OFF.jpg" /> : <img src="./Bulb-ON.jpg" />}
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={() => setIson(!ison)}>
            {ison ? "ON" : "OFF"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
