import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div className={"page_content_subtitle"}>Eagle Workflow</div>
    <div className={"page_content_content"}>
      I attempted to use the workflow combining ChatGPT with Flux, but found
      that the capabilities of AI Pilot are quite limited.
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week5/flux3.jpg`} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week5/flux2.jpg`} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week5/flux1.jpg`} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Flux Workflow</div>
    <div className={"page_content_content"}>
      I attempted to use the workflow combining ChatGPT with Flux, but found
      that the capabilities of AI Pilot are quite limited.
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week5/flux3.jpg`} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week5/flux2.jpg`} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week5/flux1.jpg`} alt={""} />
    </div>
  </>
);

const Page = () => {
  return <ContentTemplate title="Week6 Electronics Production" content={<Content />} />;
};

export default Page;
