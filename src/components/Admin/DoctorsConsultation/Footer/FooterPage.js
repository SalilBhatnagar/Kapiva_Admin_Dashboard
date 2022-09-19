import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    //color: theme.palette.text.secondary,
    background:
      "transparent radial-gradient(closest-side at 50% 50%, #58687E 0%, #39495E 100%) 0% 0% no-repeat padding-box",
    fontSize: "1.1rem",
    color: "#FFFFFF40"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography align="right">
            Kapiva is a company of Adret Retail Private Limited © Copyright 2022 <span><a href="https://www.kapiva.in/">kapiva</a></span>
            <h6><u><b>info@kapiva.in</b></u></h6>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}