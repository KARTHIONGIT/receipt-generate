import React, { useState } from "react";
import "./ReceiptContainer.css";
import PreviewModal from "../Components/PreviewModal/PreviewModal";
import Form from "../Components/Form/Form";

const ReceiptContainer = () => {
  const [showFormPage, setShowFormPage] = useState(true);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [receiptData, setReceiptData] = useState({});

  const stateValues = { showFormPage, showPreviewModal, ...receiptData };

  return (
    <>
      <div className="container">
        {showFormPage && (
          <Form
            receiptData={stateValues}
            setReceiptData={(receiptData) => setReceiptData(receiptData)}
            showModal={(showPreview) => setShowPreviewModal(showPreview)}
          />
        )}
        {showPreviewModal && (
          <PreviewModal
            receiptData={stateValues}
            showModal={(showPreview) => setShowPreviewModal(showPreview)}
            fullScreenToggle={(showForm) => setShowFormPage(showForm)}
          />
        )}
      </div>
      <span>
        &nbsp;Find my code&nbsp;
        <a
          target="blank"
          href="https://github.com/KARTHIONGIT/receipt-generate/tree/master/src/"
        >
          here&#129505;
        </a>
      </span>
    </>
  );
};

export default ReceiptContainer;
