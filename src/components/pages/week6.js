import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div className={"page_content_subtitle"}>Preparation</div>
    <div style={{ width: "50%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week5/eagle5.svg`} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week6/1.jpg`} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week6/2.jpg`} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week6/3.jpg`} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Trace Cutting</div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week6/4.jpg`} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Interior Cutting</div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week6/5.jpg`} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Soldering</div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week6/6.jpg`} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Embedded Programming</div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week6/7.jpg`} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week6/8.jpg`} alt={""} />
    </div>

  </>
);

const Page = () => {
  return <ContentTemplate title="Week6 Electronics Production" content={<Content />} />;
};

export default Page;
