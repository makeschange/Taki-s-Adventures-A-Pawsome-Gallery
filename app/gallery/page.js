import React from "react";
import GalleryList from "@/components/gallery/galleryList";

const galleryData = [
  {
    id: "g1",
    image:
      "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/bernese-mountain-dog.jpg?crop=1.00xw:0.668xh;0,0.252xh&resize=1200:*",
    title: "Birthday",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit.",
  },
  {
    id: "g2",
    image:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg",
    title: "Birthday",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit.",
  },
  {
    id: "g3",
    image:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg",
    title: "Birthday",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit.",
  },
  {
    id: "g4",
    image:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg",
    title: "Birthday",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit.",
  },
  {
    id: "g4",
    image:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg",
    title: "Birthday",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit.",
  },
  {
    id: "g4",
    image:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg",
    title: "Birthday",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit.",
  },
  {
    id: "g4",
    image:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg",
    title: "Birthday",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit.",
  },
];

function Gallery() {
  return (
    <div>
      <div className="wrapper">
        <GalleryList gallery={galleryData} />
      </div>
    </div>
  );
}

export default Gallery;
