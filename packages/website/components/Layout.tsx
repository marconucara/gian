import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

// const Container = styled("div")`
//   display: flex;
//   flex-direction: column;
//   min-height: 100%;
//   flex: 1;
// `;

// const Main = styled("main")`
//   flex-grow: 1;
//   display: flex;
//   flex-direction: column;
//   padding-top: ${themeDimension("header")};

//   ${breakpoint(800)} {
//     padding-top: ${themeDimension("headerDesktop")};
//   }
// `;

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">{children}</main>
      <Footer />
    </>
  );
};
