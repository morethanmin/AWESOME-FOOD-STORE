import { Button, Link } from "@material-ui/core";
import React from "react";

export default function Index() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "black",
        flexGrow: 0,
      }}
    >
      <h1 style={{ marginBottom: "130px" }}>WELCOME TO AWESOME FOOD STORE!</h1>
      <Link href="/store">
        <Button variant="contained" style={{ width: "100%" }} color="primary">
          Get Started
        </Button>
      </Link>
    </div>
  );
}
