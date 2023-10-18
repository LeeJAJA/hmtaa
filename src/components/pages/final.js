import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div className={"page_content_subtitle"}>Project Idea</div>
    <div className={"page_content_content"}>
      I am currently planning to develop a modular paper airplane folding
      machine. I find this project intriguing and drew inspiration from a LEGO
      creation. I am contemplating the possibility of creating a modularized,
      faster, and more flexible paper folding device. Through the combination of
      various modules, it can fold (almost) anything.
    </div>
    <div className={"page_content_subtitle"}>LEGO paper airplane maker</div>
    <div className={"page_content_content"}>
      <ReactPlayer url="https://www.youtube.com/watch?v=-eNm6MYqgO8" />
    </div>

    <div className={"page_content_subtitle"}>Primary Paper Folds</div>
    <div style={{ width: "70%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/final/folds.png`} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Z-Fold Machine</div>
    <div style={{ width: "70%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/final/zfold.png`} alt={""} />
    </div>
    <div className={"page_content_content"}>
      <ReactPlayer url="https://youtu.be/EK1xPAsIV9k" />
    </div>

    <div className={"page_content_subtitle"}>
      3D printed Paper folding machine
    </div>
    <div style={{ width: "70%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/final/3d2.jpg`} alt={""} />
    </div>
    <div className={"page_content_content"}>
      <ReactPlayer url="https://www.youtube.com/watch?v=Hg4_dVEAZho" />
    </div>
  </>
);

const Page = () => {
  return (
    <ContentTemplate
      title="Final Project - Paper Airplane Machine"
      content={<Content />}
    />
  );
};

export default Page;
