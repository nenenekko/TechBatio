import React from "react";

const TextInput = props => {
  return (
    <>
      <input type="text" {...props} />
      <style jsx>{`
        input {
          /* デフォルトのスタイルを削除 */
          -webkit-appearance: none;
          outline: none;
          /* custom styles */
          border-style: dashed;
          border-color: lightblue;
          border-width: 0.1rem;
          padding: 0.5rem;
          width: 15rem;
          font-size: 1rem;
        }
        ::placeholder {
          color: lightblue;
        }
      `}</style>
    </>
  );
};

export default TextInput;
