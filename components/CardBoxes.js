import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import { CircularProgress } from "@material-ui/core";
import useAsync from "../hooks/useAsync";
import { getStores } from "../service/store";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%", // 정사각형
    "&:hover, &:focus": { cursor: "pointer" },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function CardBoxes({ onClick }) {
  const classes = useStyles();

  const [State, fetchData] = useAsync(getStores, []);
  const { loading, data, error } = State;

  if (loading) return <CircularProgress />;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return null;
  return (
    <React.Fragment>
      <CssBaseline />

      <Grid container spacing={4}>
        {data.map((store) => (
          <Grid item key={store.id} xs={6} sm={3} md={2}>
            <Card
              className={classes.card}
              onClick={() => {
                onClick(store.id);
              }}
            >
              <CardMedia
                className={classes.cardMedia}
                image={store.thumb}
                title={store.name}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
