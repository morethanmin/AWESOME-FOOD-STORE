import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Button, makeStyles, Container } from "@material-ui/core";

const FooterButtons = ({ children }) => {
  return (
    <Container
      style={{
        marginTop: "30px",
        padding: "10px 0",
        borderTop: `1px solid `,
      }}
    >
      <Grid container justify="space-between">
        {children}
      </Grid>
    </Container>
  );
};

export default FooterButtons;
