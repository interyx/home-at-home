import React from "react";
import Container from "react-bootstrap/Container";
import "../index.css";
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <Container
      fluid
      className="tw-bg-slate-800 tw-text-slate-200 m-0 p-0 tw-min-h-screen"
      data-bs-theme="dark"
    >
      <Navigation />
      <Container className="tw-bg-slate-800 tw-min-h-screen tw-min-w-full">
        <Outlet />
      </Container>
    </Container>
  );
}

export default Root;
