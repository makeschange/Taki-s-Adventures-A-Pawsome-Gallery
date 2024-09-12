"use client";

import React from "react";

function Error({ error, reset }) {
  return (
    <div>
      <p className="text-center font-bold text-5xl mt-[10%]">
        Opps! Error Found!
      </p>
      <button
        className="bg-red-500 block px-4 py-2 rounded w-32 mx-auto mt-8 hover:red-violet-600 transition-all duration-300"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}

export default Error;
