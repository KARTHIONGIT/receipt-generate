import React, { useEffect, useState } from "react";
import { getTodaysDateString } from "../../common/utils/mathOperations.util";

import "./Form.css";

const getTodaysDateStringWithYear = getTodaysDateString("year");

const Form = ({ receiptData, setReceiptData, showModal }) => {
  const [stateValues, setStateValues] = useState({
    userName: "Karthikeyan K",
    phoneNumber: "1234567890",
    email: "karthikandhan7@gmail.com",
    addressLine1: "19, Sriram nagar",
    addressLine2: "Dubai main road",
    addressLine3: "Chennai 600006",
    planDuration: 1,
    amountPerMonth: 800,
    startingDate: new Date().toDateString().slice(4),
  });

  const handleChange = (e) => {
    setStateValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    setReceiptData(stateValues);
  }, [JSON.stringify(stateValues)]);

  function handleSubmit(e) {
    showModal(!showPreviewModal);
    setReceiptData(stateValues);
    e.preventDefault();
  }
  const { showPreviewModal } = receiptData;

  return (
    <div className="formPage">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <table>
          <tr>
            <th>
              <label>RECEIPT TYPE</label>
            </th>
            <td>
              <select className="receiptType">
                <option>
                  <h3>Internet Bill</h3>
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <th>
              <label>NAME</label>
            </th>
            <td>
              <input
                type="text"
                onChange={handleChange}
                value={stateValues.userName}
                name="userName"
                maxLength={30}
                required
              />
            </td>
          </tr>
          <tr>
            <th>
              <label>PHONE</label>
            </th>
            <td>
              <input
                type="text"
                onChange={handleChange}
                value={stateValues.phoneNumber}
                name="phoneNumber"
                maxLength={10}
                pattern="[1-9]{1}[0-9]{9}"
                required
              />
            </td>
          </tr>
          <tr>
            <th>
              <label>EMAIL</label>
            </th>
            <td>
              <input
                type="email"
                required
                onChange={handleChange}
                value={stateValues.email}
                name="email"
                maxLength={30}
              />
            </td>
          </tr>
          <tr>
            <th rowSpan={3} style={{ verticalAlign: "middle" }}>
              <label>ADDRESS</label>
            </th>
            <td>
              <input
                type="text"
                onChange={handleChange}
                value={stateValues.addressLine1}
                name="addressLine1"
                maxLength={30}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                onChange={handleChange}
                value={stateValues.addressLine2}
                name="addressLine2"
                maxLength={30}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                onChange={handleChange}
                value={stateValues.addressLine3}
                name="addressLine3"
                maxLength={30}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label>PLAN DURATION</label>
            </th>
            <td>
              <select name="planDuration" onChange={handleChange}>
                <option value={1}>1 month</option>
                <option value={3}>3 months</option>
                <option value={6}>6 months</option>
                <option value={12}>12 months</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>
              <label>AMOUNT PER MONTH</label>
            </th>
            <td>
              <input
                type="number"
                onChange={handleChange}
                value={stateValues.amountPerMonth}
                name="amountPerMonth"
                min="400.00"
                max="5000.00"
                step="0.01"
                required
              />
            </td>
          </tr>
          <tr>
            <th>
              <label>STARTING DATE</label>
            </th>
            <td>
              <input
                type="date"
                onChange={handleChange}
                name="startingDate"
                required
                defaultValue={getTodaysDateStringWithYear}
              />
            </td>
          </tr>
        </table>
        <br />
        <input
          type="submit"
          value="GENERATE RECEIPT"
          className="generateButton"
        />
      </form>
    </div>
  );
};

export default Form;
