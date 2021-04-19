import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import useAsync from "../hooks/useAsync";
import { getStoresId } from "../service/store";
import axios from "axios";
import { ButtonBase, CircularProgress } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CardDetail({ open, selectedId, onClose }) {
  const [State, fetchData] = useAsync(
    () => {
      if (selectedId.current !== 0) return getStoresId(selectedId.current);
    },
    [selectedId.current],
    true
  );
  console.log(State);
  const { loading, data, error } = State;

  if (loading) return <CircularProgress />;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return null;
  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="" onClose={onClose}>
        {data.name}
      </DialogTitle>
      <DialogContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img src={data.image} style={{ margin: "0 auto" }} />

          <div style={{ marginTop: "20px", fontSize: "15px" }}>
            {data.description}
          </div>
          {data.url ? (
            <div style={{ marginTop: "20px" }}>
              <a href={data.url}>
                <Button>홈페이지</Button>
              </a>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
