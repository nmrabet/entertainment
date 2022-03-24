import React from "react";

function Button({ text }) {
  return (
    <div className="text-center">
      <button className="bg-specialred text-white rounded-md p-3 mt-5 w-full hover:bg-white hover:text-midnight">
        {text}
      </button>
    </div>
  );
}

export default Button;
