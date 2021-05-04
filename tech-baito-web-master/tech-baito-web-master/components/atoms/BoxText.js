import React from "react";

const BoxText = props => {
  return (
    <div>
      {props.children}
      <style jsx>{`
        div {
          display: flex;
          background: lightblue;
          padding: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default BoxText;
