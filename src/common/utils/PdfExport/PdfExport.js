import React, { useEffect, useRef } from "react";
import printIcon from "../../graphics/printIcon.png";

import "./PdfExport.css";

const MAX_LENGTH_ALLOWED = 100;

export const PdfExport = ({ targetClass }) => {
  const titleRef = useRef(document.title);
  useEffect(() => {
    window.addEventListener("afterprint", afterPrintEvent);
    window.addEventListener("beforeprint", beforePrintEvent);

    return () => {
      window.removeEventListener("afterprint", afterPrintEvent);
      window.removeEventListener("beforeprint", beforePrintEvent);
    };
  }, []);

  function createPrintWrapper() {
    const root = document.querySelector("#root");
    const wrapper = document.createElement("div");
    wrapper.setAttribute("id", "printWrapper");
    const details = document.querySelector(`.${targetClass}`);
    if (details) {
      const clonedDetails = details.cloneNode(true);
      root.innerHTML = "";
      root.appendChild(wrapper);
      wrapper.appendChild(clonedDetails);
    }
  }

  function afterPrintEvent() {
    const container = document.querySelector("#printWrapper");
    container?.remove();
    document.title = titleRef.current;
    window.location.reload();
  }

  function beforePrintEvent() {
    if (document.title.length > MAX_LENGTH_ALLOWED) {
      const title = document.title.slice(0, MAX_LENGTH_ALLOWED);
      document.title = title;
    }
  }

  function handlePrint() {
    createPrintWrapper();
    window.print();
  }

  return (
    <>
      <img
        alt="save as pdf"
        className="printIcon"
        src={printIcon}
        width={50}
        height={50}
        onClick={handlePrint}
      />
    </>
  );
};
