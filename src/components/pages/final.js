import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div className={"page_content_subtitle"}>Project Idea</div>
    <div className={"page_content_content"}>
      I am currently planning to develop a paper airplane folding machine. I
      find this project intriguing and drew inspiration from a LEGO creation. I
      am contemplating the possibility of creating a smaller, faster, and more
      flexible paper airplane folding device.
    </div>
    <div className={"page_content_subtitle"}>LEGO paper airplane maker</div>
    <div className={"page_content_content"}>
      <ReactPlayer url="https://www.youtube.com/watch?v=-eNm6MYqgO8" />
    </div>
    <div className={"page_content_subtitle"}>
      3D printed Paper folding machine
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
