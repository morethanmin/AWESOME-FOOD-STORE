import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

import Layout from "../components/material/Layout";
import Index from "./index";
export default class RootApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, router, ...other } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>AWESOME FOOD STORE</title>
        </Head>
        <CssBaseline />

        <Layout>
          <Component {...other} />
        </Layout>
      </React.Fragment>
    );
  }
}
