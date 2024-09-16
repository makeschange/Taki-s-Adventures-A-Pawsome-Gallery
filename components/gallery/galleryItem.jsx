import Image from "next/image";
import React from "react";

function GalleryItem({ gallery }) {
  return (
    <div>
      <div className="relative bg-transparent before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-t before:from-takiBrown-400 before:to-transparent before:z-20 before:hover:from-takiBrown-500 transition-all divide-purple-300 ease-in-out">
        <div className="relative min-h-[300px] ">
          <Image
            className="object-cover object-top z-10"
            src={gallery?.image}
            fill
          />
        </div>
        <div className=" relative z-30 p-4">
          <h2 className="text-xl font-bold mb-2">{gallery?.title}</h2>
          <p className="">{gallery?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
