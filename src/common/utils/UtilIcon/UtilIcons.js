import closeIcon from "../../graphics/close.png";
import fullScreenOn from "../../graphics/fullscreen.png";
import fullScreenOff from "../../graphics/exit-full-screen.png";

import "./UtilIcons.css";
import { PdfExport } from "../PdfExport/PdfExport";

export const UtilIcons = ({ receiptData, closeModal, fullScreenToggle }) => {
  const { showPreviewModal, showFormPage } = receiptData;
  return (
    <div className="utilIcon">
      <div className="fullscreenIconContainer">
        <span onClick={() => fullScreenToggle(!showFormPage)}>
          {showFormPage ? (
            <img
              className="fullscreenIcon"
              src={fullScreenOn}
              width={27}
              height={27}
            />
          ) : (
            <img
              className="fullscreenIcon"
              src={fullScreenOff}
              width={27}
              height={27}
            />
          )}
        </span>
      </div>
      <div className="closeIconContainer">
        <span
          onClick={() => {
            fullScreenToggle(true);
            closeModal(!showPreviewModal);
          }}
          style={{ position: "sticky" }}
        >
          <img className="closeIcon" src={closeIcon} width={20} height={20} />
        </span>
      </div>      
    </div>
  );
};
