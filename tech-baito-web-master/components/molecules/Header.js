import React from "react";

// 暫定のロゴっぽいやつ
// TODO: ロゴに差し替える
const Square = () => {
  return (
    <>
      <div></div>
      <style jsx>{`
        div {
          background: lightblue;
          height: 5rem;
          width: 5rem;
          margin-right: 3rem;
        }
      `}</style>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="container">
        <Square />
        TECH-BAITO
      </div>
      <style jsx>{`
        .container {
          padding: 1rem;
          background: black;
          color: white;
          display: flex;
          align-items: center;
          font-size: 2rem;
        }
      `}</style>
    </>
  );
};

export default Header;
