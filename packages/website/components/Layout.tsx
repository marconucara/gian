import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">{children}</main>
      <Footer />
    </>
  );
};
