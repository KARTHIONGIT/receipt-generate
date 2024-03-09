import React from "react";
import UserDetails from "./UserDetails/UserDetails";
import InvoiceDetails from "./InvoiceDetails/InvoiceDetails";
import AdjustmentDetails from "./AdjustmentDetails/AdjustmentDetails";
import TaxAndSummary from "./TaxAndSummary/TaxAndSummary";
import TermsAndConditions from "./Footer/TermsAndConditions";

import "./PreviewModal.css";
import BrandDetails from "./Footer/BrandDetails";

const PreviewModal = ({ receiptData, closeModal, fullScreenToggle }) => {
  return (
    <div className="previewModal">
      {/* <div style={{ display: "flex"}}>
        <span onClick={() => closeModal(!showPreviewModal)}>{closeIcon()}</span>
        <span onClick={() => fullScreenToggle(!showFormPage)}>
          <h1>[ ]</h1>
        </span>
      </div> */}

      <div className="receipt-details">
        <div className="profileAndInvoice">
          <UserDetails receiptData={receiptData} />
          <InvoiceDetails receiptData={receiptData} />
        </div>

        <div className="adjustmentsDetails">
          <AdjustmentDetails receiptData={receiptData} />
        </div>

        <div className="taxAndSummary">
          <TaxAndSummary receiptData={receiptData} />
        </div>
        <div className="footer">
          <TermsAndConditions />
          <BrandDetails />
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
