import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div className={"page_content_subtitle"}>WIP</div>
    <div className={"page_content_content"}>WIP</div>
  </>
);

const Page = () => {
  return <ContentTemplate title="Week3 EP" content={<Content />} />;
};

export default Page;
