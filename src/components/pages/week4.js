import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div className={"page_content_subtitle"}> 3D Scanning and Printing </div>
    <div className={"page_content_content"}>
      <em>
        Recreating an Iconic Scene from 'The Terminator' Through 3D Scanning and
        Printing
      </em>
      <br />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/week4/thumbs-up-terminator.gif`}
        alt={""}
      />
    </div>
    <div className={"page_content_content"}>
      Ready to give a thumbs-up to technology? I'm diving into 3D printing to
      recreate that iconic Terminator thumbs-up scene. It's where reel meets
      real, with a touch of geeky fun. Through 3D magic, I'll be bringing this
      cool cinematic salute to life, making a classic gesture touchable. Who
      knew a thumb could inspire such a quirky project? <br />
    </div>

    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week4/2.jpg`} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week4/6.png`} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week4/7.png`} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week4/8.png`} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week4/9.png`} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week4/3.jpg`} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={`/assets/week4/5.jpg`} alt={""} />
    </div>

    {/* <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/week4/2.jpg`}
        alt={""}
      />
    </div> */}

    <div className={"page_content_subtitle"}>Design and 3D Print an Object</div>
    {/* <div className={"page_content_content"}>
      In cities all around the world, the current urban development has problems
      such as value extraction, inequality, and lack of transparency. How can we
      develop a new process for prosocial urban development, which preserves
      value in the community, build amenities that the community demands,
      support the local economy, reduce inequality, and be transparent and
      trusted? <br />
    </div>

    <div className={"page_content_subtitle"}>Web-based Interactive Sandbox</div>
    <div className={"page_content_content"}>
      At city science summit 2022, we held a workshop titled{" "}
      <em>
        SoCity Community Process: A New Process for Pro-social Urban Development
      </em>
      . In this workshop, participants will be introduced to the technologies
      and research works around blockchain, smart-contract, token economies,
      decentralized governance, urban simulations, and algorithmic zoning. Then
      participants will form teams to explore noval, prosocial, decentralized
      urban development processes that enables the community members to gain
      leverage over traditionally more powerful stakeholders such as real estate
      developers; to grow their ownership and wealth in the community; to
      coordinate how to fund and use community endowments; to gain the tools and
      insights to predict the impact of their decisions; to define membership
      and relevance in a more fine-grain way; to improve data privacy and
      operation efficiency and transparency; and many more, in both context of
      Cambridge and participants' home cities. <br />
      Thus, we prepared data and a Web-based Interactive Sandbox tools to
      facilitate the exploration for both economics and governance purposes.
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/communitydao/3.png`}
        alt={""}
      />
    </div> */}

    {/* <div>
      <ReactPlayer url="https://youtu.be/zVa7JspCqfg" />
    </div> */}

    {/* <div className={"page_content_content"}>
      Website Link:{" "}
      <a href="https://CommunityDAO.city/">https://CommunityDAO.city/</a> <br />
      Github Link:{" "}
      <a href="https://github.com/CityScienceLab-Shanghai/csl2022-workshop">
        https://github.com/CityScienceLab-Shanghai/csl2022-workshop
      </a>
      <br />
    </div> */}
  </>
);

const Page = () => {
  return <ContentTemplate title="Week1 CAD" content={<Content />} />;
};

export default Page;
