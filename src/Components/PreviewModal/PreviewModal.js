import React from "react";
import UserDetails from "./UserDetails/UserDetails";
import InvoiceDetails from "./InvoiceDetails/InvoiceDetails";
import AdjustmentDetails from "./AdjustmentDetails/AdjustmentDetails";
import TaxAndSummary from "./TaxAndSummary/TaxAndSummary";
import TermsAndConditions from "./Footer/TermsAndConditions";
import BrandDetails from "./Footer/BrandDetails";
import Header from "./Header/Header";
import { UtilIcons } from "../../common/utils/UtilIcon/UtilIcons";
import { PdfExport } from "../../common/utils/PdfExport/PdfExport";

import "./PreviewModal.css";

const PreviewModal = ({ receiptData, closeModal, fullScreenToggle }) => {
  return (
    <div className="previewModal">
      <div>
        <UtilIcons
          receiptData={receiptData}
          closeModal={closeModal}
          fullScreenToggle={fullScreenToggle}
        />
      </div>
      <div className="receipt-details">
        <div className="receiptHeader">
          <Header />
        </div>
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
        <div className="receiptFooter">
          <TermsAndConditions />
          <BrandDetails />
        </div>
      </div>
      <PdfExport targetClass="receipt-details" />
    </div>
  );
};

export default PreviewModal;
