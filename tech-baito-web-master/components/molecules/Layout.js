import React from "react";
import Header from "@/components/molecules/Header";

const Layout = props => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="contents">{props.children}</div>
      </div>
      <style jsx>{`
        .container {
          margin: -8px; /* デフォルトのmargin消す */

          display: flex;
          flex-direction: column;
        }
        .contents {
          padding: 1rem;
        }
      `}</style>
    </>
  );
};

export default Layout;
