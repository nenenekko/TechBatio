import React from "react";

const Textarea = props => {
  return (
    <>
      <textarea {...props} />
      <style jsx>{`
        textarea {
          /* remove defalult styles */
          -webkit-appearance: none;
          outline: none;
          resize: none;
          /* custom styles */
          border-style: dashed;
          border-color: lightblue;
          border-width: 0.1rem;
          padding: 0.5rem;
          width: 50%;
          height: 10rem;
          font-size: 1rem;
        }
        ::placeholder {
          color: lightblue;
        }
      `}</style>
    </>
  );
};

export default Textarea;
