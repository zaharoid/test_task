import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "../AppBar";
import { Container } from "../App/App.styled";

import Loader from "../Loader";

const Layout = () => {
  return (
    <main>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </main>
  );
};

export default Layout;
