import { Button, Link } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function error({ statusCode }) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        top: 0,
        zIndex: 0,
        position: "relative",
      }}
    >
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
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "130px" }}>ERROR</h1>
        <p>Move to main after 5 seconds.</p>
        <Link href="/" style={{ width: "100%" }}>
          <Button variant="contained" style={{ width: "100%" }} color="primary">
            돌아가기
          </Button>
        </Link>
      </div>
    </div>
  );
}
