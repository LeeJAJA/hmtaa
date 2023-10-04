import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div className={"page_content_subtitle"}>Not Started</div>
    <div className={"page_content_content"}>Not Started</div>
  </>
);

const Page = () => {
  return <ContentTemplate title="Week5 ED" content={<Content />} />;
};

export default Page;
