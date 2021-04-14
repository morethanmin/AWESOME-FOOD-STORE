import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © 이상민"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    zIndex: 10,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },

  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link href="/" className={classes.link}>
              AWESOME FOOD STORE
            </Link>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="/"
              className={classes.link}
            >
              ABOUT
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/store"
              className={classes.link}
            >
              STORE
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <div
        style={{
          width: "100%",
          height: "400px",
          top: 0,
          zIndex: 0,
          position: "relative",
        }}
      >
        {/* <img
          style={{
            width: "100%",
            height: "90vh",
            top: 0,
            filter: "brightness(60%)",
            zIndex: 0,
          }}
          src="https://unsplash.com/photos/2lWGQ02DGL8/download?force=true&w=2400"
        /> */}
        <div
          style={{
            position: "absolute",
            top: 0,
            margin: "0 auto",
            left: "50%",
            top: "20%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            color: "black",
          }}
        >
          <h1 style={{ marginBottom: "130px" }}>
            WELCOME TO AWESOME FOOD STORE!
          </h1>
          <Link href="/store" style={{ width: "100%" }}>
            <Button
              variant="contained"
              style={{ width: "100%" }}
              color="primary"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
      <Container
        maxWidth="lg"
        component="main"
        className={classes.heroContent}
      ></Container>

      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          <Box mt={5}>
            <Copyright />
          </Box>
        </Grid>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
