import { Button, CircularProgress } from "@material-ui/core";
import Router from "next/router";
import CardBoxes from "../components/CardBoxes";
import CardDetail from "../components/CardDetail";
import useAsync from "../hooks/useAsync";
import { getStores, getStoresid } from "../service/store";
import React, { useRef, useState } from "react";

export default (props) => {
  const [open, setOpen] = useState(false);
  const selectedId = useRef(0);

  const onClick = async (id) => {
    selectedId.current = id;
    setOpen(true);
  };
  const onClose = (id) => {
    setOpen(false);
  };
  return (
    <>
      <CardBoxes onClick={onClick} />
      <CardDetail selectedId={selectedId} open={open} onClose={onClose} />
    </>
  );
};
