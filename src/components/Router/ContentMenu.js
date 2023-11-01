import React from "react";

import GalleryView from "../pages/GalleryView.js";

import Final from "../pages/final.js"
import Week1 from "../pages/week1.js";
import Week2 from "../pages/week2.js";
import Week3 from "../pages/week3.js";
import Week4 from "../pages/week4.js";
import Week5 from "../pages/week5.js";
import Week6 from "../pages/week6.js";

import AboutPage from "../pages/AboutPage.js";

const ContentMenu = {
  0: {
    path: "/",
    element: <GalleryView />,
    title: "",
    thumbnail: "",
    displayInGallery: false,
  },
  1: {
    path: "/final",
    element: <Final />,
    title: "Final Project",
    thumbnail: "/assets/final/cover.jpg",
    displayInGallery: true,
  },
  2: {
    path: "/week1",
    element: <Week1 />,
    title: "#1 computer-aided design",
    thumbnail: "/assets/week1/11.jpg",
    displayInGallery: true,
  },
  3: {
    path: "/week2",
    element: <Week2 />,
    title: "#2 computer-controlled cutting",
    thumbnail: "/assets/wip/wip.jpg",
    displayInGallery: true,
  },
  4: {
    path: "/week3",
    element: <Week3 />,
    title: "#3 electronics production",
    thumbnail: "/assets/wip/wip.jpg",
    displayInGallery: true,
  },
  5: {
    path: "/week4",
    element: <Week4 />,
    title: "#4 3D scanning and printing",
    thumbnail: "/assets/week4/3.jpg",
    displayInGallery: true,
  },
  6: {
    path: "/week5",
    element: <Week5 />,
    title: "#5 electronics design",
    thumbnail: "/assets/week5/flux1.jpg",
    displayInGallery: true,
  },
  7: {
    path: "/week6",
    element: <Week6 />,
    title: "#6 electronics production",
    thumbnail: "/assets/week6/8.jpg",
    displayInGallery: true,
  },
  17: {
    path: "/gallery",
    element: <GalleryView />,
    title: "Projects",
    thumbnail: "",
    displayInGallery: false,
  },
  18: {
    path: "/about",
    element: <AboutPage />,
    title: "About",
    thumbnail: "",
    displayInGallery: false,
  },
};

export default ContentMenu;
