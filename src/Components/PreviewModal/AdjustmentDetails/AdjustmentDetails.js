import { calculatePercentage, getAmountWithZeroPaisa } from "../../../common/utils/mathOperations.util";
import "./AdjustmentDetails.css";

const AdjustmentDetails = ({receiptData }) => {
  const { planDuration, amountPerMonth } = receiptData;
  const getOriginalAmount = () => {
    const originalAmount = (amountPerMonth * planDuration) / 1.18;
    return Math.round(originalAmount);
  };
  const finalAmount =
    getOriginalAmount() + calculatePercentage(getOriginalAmount(), 18);
  const nill = getAmountWithZeroPaisa(0);
  const totalAmount = getAmountWithZeroPaisa(finalAmount);
  return (
    <div className="adjustmentDetails">
      <table>
        <tr>
          <th>Previous<br/> A </th>
          <th>Payments <br/> B </th>
          <th>Adjustments <br/> C </th>
          <th>Balance Amount <br/> D=A-(B+C) </th>
          <th>Current Bill<br/> E </th>
          <th>Amount payable <br/> F=D+E </th>
          <th>Other Payments</th>
        </tr>
        <tr>
          <td>Rs. {nill}</td>
          <td>Rs. {totalAmount}</td>
          <td>Rs. {nill}</td>
          <td>Rs. -{totalAmount}</td>
          <td>Rs. {totalAmount}</td>
          <td>Rs. {nill}</td>
          <td>{nill}</td>
        </tr>
      </table>
    </div>
  );
};

export default AdjustmentDetails;
