import closeIcon from "../../graphics/close.png";
import fullScreenOn from "../../graphics/fullscreen.png";
import fullScreenOff from "../../graphics/exit-full-screen.png";

import "./UtilIcons.css";
import { PdfExport } from "../PdfExport/PdfExport";

export const UtilIcons = ({ receiptData, showModal, fullScreenToggle }) => {
  const { showPreviewModal, showFormPage } = receiptData;
  return (
    <div className="utilIcon">
      <div className="fullscreenIconContainer">
        <span onClick={() => fullScreenToggle(!showFormPage)}>
          <img
            className="fullscreenIcon"
            src={showFormPage ? fullScreenOn : fullScreenOff}
            width={30}
            height={30}
          />
        </span>
      </div>
      <div className="closeIconContainer">
        <span
          onClick={() => {
            fullScreenToggle(true);
            showModal(!showPreviewModal);
          }}
          style={{ position: "sticky" }}
        >
          <img className="closeIcon" src={closeIcon} width={23} height={23} />
        </span>
      </div>
    </div>
  );
};
