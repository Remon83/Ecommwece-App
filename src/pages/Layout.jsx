import { Outlet } from 'react-router-dom';
import React from 'react'
import { Container } from "react-bootstrap";
import {Header} from "../components/Layout";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet/>
    </Container>
  )
}

export default Layout