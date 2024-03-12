import React, { useCallback, useState } from "react";
import "./ReceiptContainer.css";
import PreviewModal from "../Components/PreviewModal/PreviewModal";
import Form from "../Components/Form/Form";

const ReceiptContainer = () => {
  const [showFormPage, setShowFormPage] = useState(true);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [receiptData, setReceiptData] = useState({});

  const stateValues = { showFormPage, showPreviewModal, ...receiptData };

  return (
    <div className="container">
      {showFormPage && (
        <Form
          receiptData={stateValues}
          setReceiptData={(receiptData) => setReceiptData(receiptData)}
          showModal={(showPreview) => setShowPreviewModal(showPreview)}
        />
      )}
      {console.log("Code is in contianer")}
      {showPreviewModal && (
        <PreviewModal
          receiptData={stateValues}
          showModal={(showPreview) => setShowPreviewModal(showPreview)}
          fullScreenToggle={(showForm) => setShowFormPage(showForm)}
        />
      )}
    </div>
  );
};

export default ReceiptContainer;
