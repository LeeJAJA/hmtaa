import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { stateStore } from "../stores";
import ContentRouter from "./Router/ContentRouter.js";
import ContentMenu from "./Router/ContentMenu.js";

import "../App.css";

const DesktopVersion = () => {
  const { page, setPage } = stateStore;
  const navigate = useNavigate();

  //   console.log(page)

  const PageTitle = ({ text, id, isSection = false }) => {
    return (
      <div
        className={
          (isSection ? "sec_title" : "page_title") +
          " clickable not-select " +
          (id == page ? "active" : "")
        }
        onClick={() => {
          setPage(id);
          navigate(ContentMenu[id]["path"]);
        }}
      >
        {text}
      </div>
    );
  };

  return (
    <div className={"container"}>
      <div className={"menu"}>
        <div className={"menu_content"}>
          <div
            className={"section clickable_large"}
            onClick={() => {
              setPage(17);
              navigate(ContentMenu[17]["path"]);
            }}
          >
            <div className={"title"}>Chance Jiajie Li's Sketch Pad</div>
            <div className={"sub_title"}>
              PROGRASS TRACKNG OF HTMAA 2023
            </div>
          </div>
          {/* ---------- Divider ---------- */}

          <div className={"section"}>
            <div className={"sec_title"}>Prograss Record</div>
            <hr />
            <PageTitle text={ContentMenu[1]["title"]} id={1} />
            <PageTitle text={ContentMenu[2]["title"]} id={2} />
            <PageTitle text={ContentMenu[3]["title"]} id={3} />
            <PageTitle text={ContentMenu[4]["title"]} id={4} />
            <PageTitle text={ContentMenu[5]["title"]} id={5} />
          </div>


          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <PageTitle text={"Projects"} id={17} />
            <PageTitle text={"About"} id={18} />
          </div>
        </div>
      </div>
      <div className={"content"} id="scroller">
        <ContentRouter />
      </div>
    </div>
  );
};

export default DesktopVersion;
