import React from "react";

const Button = props => {
  return (
    // HTMLのボタンにonClickやらdisabledをそのまま渡せるように ... (スプレッド演算子)を使う
    <button {...props}>
      {props.children}
      <style jsx>{`
        button {
          /* custom styles */
          background: ${props.color ? props.color : "lightblue"};
          border: none;
          border-radius: 0.3rem;
          padding: 0.5rem;
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

export default Button;
