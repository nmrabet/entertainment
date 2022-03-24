import React from "react";

function Button({ text }) {
  return (
    <div className="text-center">
      <button className="bg-specialred text-white rounded-md p-3 mt-5 w-full">
        {text}
      </button>
    </div>
  );
}

export default Button;
