import React from "react";
import ErrorPage from "../components/Error";
export default function _Error({ statusCode }) {
  return (
    <div>
      <ErrorPage statusCode={statusCode} />
    </div>
  );
}
