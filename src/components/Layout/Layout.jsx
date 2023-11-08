import React from "react";
import NavigationBar from "../NavigationBar";
import Container from "../Container";
import FloatingNav from "../FloatingNav";

function Layout({ children }) {
  return (
    <>
      <div className="w-screen min-h-screen h-full bg-gray-100">
        <NavigationBar />
        <Container>{children}</Container>
        <FloatingNav />
      </div>
    </>
  );
}

export default Layout;
