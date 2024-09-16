"use client";

import React from "react";
import GalleryItem from "./galleryItem";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 2,
  600: 1,
};

function GalleryList({ gallery }) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {gallery.map((item) => {
        return <GalleryItem key={item.id} gallery={item} />;
      })}
    </Masonry>
  );
}

export default GalleryList;

//...
