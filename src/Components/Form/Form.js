import React, { useEffect, useState } from "react";
import { getTodaysDateString } from "../../common/utils/mathOperations.util";

import "./Form.css";

const Form = ({ receiptData, setReceiptData, showModal }) => {
  const { showPreviewModal } = receiptData;
  const planList = [
    { count: 1, text: "1 month" },
    { count: 3, text: "3 months" },
    { count: 6, text: "6 months" },
    { count: 12, text: "12 months" },
  ];
  const todaysDateString = new Date().toDateString().slice(4);

  const [userName, setUserName] = useState("Karthikeyan K");
  const [phoneNumber, setPhoneNumber] = useState("1231231231");
  const [email, setEmail] = useState("karthikandhan7@gmail.com");
  const [addressLine1, setAddressLine1] = useState("19, Sriram nagar");
  const [addressLine2, setAddressLine2] = useState("Dubai main road");
  const [addressLine3, setAddressLine3] = useState("Chennai 600006");
  const [planDuration, setPlanDuration] = useState(planList[0].count);
  const [amountPerMonth, setAmountPerMonth] = useState(800);
  const [startingDate, setStartingDate] = useState(todaysDateString);

  const stateValues = {
    userName,
    phoneNumber,
    email,
    addressLine1,
    addressLine2,
    addressLine3,
    planDuration,
    amountPerMonth,
    startingDate,
  };

  useEffect(() => {
    setReceiptData(stateValues);
  }, [JSON.stringify(stateValues)]);

  function handleSubmit(e) {
    showModal(!showPreviewModal);
    setReceiptData(stateValues);
    e.preventDefault();
  }

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
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
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
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                onChange={(e) => setAddressLine1(e.target.value)}
                value={addressLine1}
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
                onChange={(e) => setAddressLine2(e.target.value)}
                value={addressLine2}
                name="addressLine2"
                maxLength={30}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                onChange={(e) => setAddressLine3(e.target.value)}
                value={addressLine3}
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
              <select
                onChange={(e) => {
                  const duration = planList.find(
                    (val) => val.text === e.target.value
                  ).count;
                  setPlanDuration(duration);
                }}
              >
                {planList.map((value) => (
                  <option key={value.text}>{value.text}</option>
                ))}
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
                onChange={(e) => setAmountPerMonth(e.target.value)}
                value={amountPerMonth}
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
                onChange={(e) => setStartingDate(e.target.value)}
                name="startingDate"
                required
                defaultValue={getTodaysDateString("year")}
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
