import React from "react";

function Button({ onClick, children, className, type }) {
  const style = `hover:scale-110 tracking-widest transition ease-out duration-300 block max-w-[fit-content] px-5 font-chicle tracking-wider uppercase py-2 bg-gradient-to-r from-takiBrown-400 to-takiBrown-500 rounded-lg ${className}`;

  return (
    <button onClick={onClick} className={style} type={type ? type : "submit"}>
      {children}
    </button>
  );
}

export default Button;
