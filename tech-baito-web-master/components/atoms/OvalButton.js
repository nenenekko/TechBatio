import React from "react";

const OvalButton = props => {
  return (
    // HTMLのボタンにonClickやらdisabledをそのまま渡せるように ... (スプレッド演算子)を使う
    <button {...props}>
      {props.children}
      <style jsx>{`
        button {
          background: ${props.color ? props.color : "lightblue"};
          border: none;
          border-radius: 1.2rem;
          padding: 0.5rem 3rem;
          font-size: 1rem;
        }
        button:focus {
          /* remove default styles */
          outline: none;
        }
      `}</style>
    </button>
  );
};

export default OvalButton;
