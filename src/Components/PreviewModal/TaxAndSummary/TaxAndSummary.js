import {
  calculatePercentage,
  getAmountWithZeroPaisa,
  getInternetPlanSpeed,
} from "../../../common/utils/mathOperations.util";
import "./TaxAndSummary.css";

const TaxAndSummary = ({ receiptData }) => {
  const { planDuration, amountPerMonth } = receiptData;
  const planName = `${getInternetPlanSpeed(amountPerMonth)}
  Mbps_UNL_CHN_${planDuration}_Mon`;

  const getOriginalAmount = () => {
    const originalAmount = (amountPerMonth * planDuration) / 1.18;
    return Math.round(originalAmount);
  };

  const amountBeforeTax = getAmountWithZeroPaisa(getOriginalAmount());
  const gstAmount = calculatePercentage(getOriginalAmount(), 9).toFixed(2);
  const finalAmount =
    getOriginalAmount() + calculatePercentage(getOriginalAmount(), 18);
  const roundOffAmount = (finalAmount % 1).toFixed(2);

  return (
    <div>
      <table>
        <tr>
          <th>S.No.</th>
          <th>Particular</th>
          <th>HSN/SAC</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>1</td>
          <td>{planName}</td>
          <td>N/A</td>
          <td className="amountCell">Rs. {amountBeforeTax}</td>
        </tr>
        <tr>
          <th className="amountCellHead" colspan="3">
            CGST 9.00%
          </th>
          <td className="amountCell">Rs. {gstAmount}</td>
        </tr>
        <tr>
          <th className="amountCellHead" colspan="3">
            SGST 9.00%
          </th>
          <td className="amountCell">Rs. {gstAmount}</td>
        </tr>
        <tr>
          <th className="amountCellHead" colspan="3">
            Sub Total
          </th>
          <td className="amountCell">Rs. {finalAmount}</td>
        </tr>
        <tr>
          <th className="amountCellHead" colspan="3">
            Rounded Off
          </th>
          <td className="amountCell">Rs. -{roundOffAmount}</td>
        </tr>
        <tr>
          <th className="amountCellHead" colspan="3">
            Grand Total
          </th>
          <th className="amountCell">
            Rs. {getAmountWithZeroPaisa(finalAmount)}
          </th>
        </tr>
      </table>
    </div>
  );
};

export default TaxAndSummary;
