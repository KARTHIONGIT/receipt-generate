import { getInternetPlanSpeed, getUniqueInteger } from "../../../common/utils/mathOperations.util";
import "./InvoiceDetails.css";

const InvoiceDetails = ({ receiptData }) => {
  const { phoneNumber, planDuration, startingDate, amountPerMonth } = receiptData;
  const selectedDate = new Date(startingDate);
  const internetSpeed = getInternetPlanSpeed(amountPerMonth);
  const getDueDate = () => {
    return selectedDate.toDateString().slice(4);
  };
  const getInvoiceDate = () => {
    const currentDay = selectedDate.getDate();
    selectedDate.setDate(currentDay + 1);
    return selectedDate.toDateString().slice(4);
  };

  const getEndDate = () => {
    const currentMonth = selectedDate.getMonth();
    selectedDate.setMonth(currentMonth + planDuration);
    return selectedDate.toDateString().slice(4);
  };

  
  return (
    <div className="invoiceDetails">
      <table>
        <tr>
          <th width="50%">Invoice Number</th>
          <td>{getUniqueInteger()}</td>
        </tr>
        <tr>
          <th>Invoice Date</th>
          <td>{getInvoiceDate()}</td>
        </tr>
        <tr>
          <th>Due Date</th>
          <td>{getDueDate()}</td>
        </tr>
        <tr>
          <th>Billing Period</th>
          <td>{getInvoiceDate() + " to " + getEndDate()}</td>
        </tr>
        <tr>
          <th>Customer ID</th>
          <td>{phoneNumber?.slice(5) + phoneNumber?.slice(0, 5)}</td>
        </tr>
        <tr>
          <th>Plan Name</th>
          <td>{internetSpeed}Mbps_UNL_CHN_{planDuration}_Mon</td>
        </tr>
        <tr>
          <th>Customer Type</th>
          <td>Home</td>
        </tr>
      </table>
    </div>
  );
};

export default InvoiceDetails;