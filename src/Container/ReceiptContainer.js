import React, { useState } from "react";
import "./ReceiptContainer.css";
import PreviewModal from "../Components/PreviewModal/PreviewModal";


const ReceiptContainer = () => {
  const planList = [
    { count: 1, text: "1 month" },
    { count: 3, text: "3 months" },
    { count: 6, text: "6 months" },
    { count: 12, text: "12 months" },
  ];
  const todaysDateString = new Date().toDateString().slice(4);
  const [showFormPage, setShowFormPage] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(true);
  const [userName, setUserName] = useState("Karthikeyan K");
  const [phoneNumber, setPhoneNumber] = useState("7358220927");
  const [email, setEmail] = useState("karthikandhan17@gmail.com");
  const [addressLine1, setAddressLine1] = useState("19, Sriram nagar");
  const [addressLine2, setAddressLine2] = useState("Dubai main road");
  const [addressLine3, setAddressLine3] = useState("Dubai 600006");
  const [planDuration, setPlanDuration] = useState(planList[2].count);
  const [amountPerMonth, setAmountPerMonth] = useState(800);
  const [startingDate, setStartingDate] = useState(todaysDateString);

  const stateValues = {
    showFormPage,
    showPreviewModal,
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
  function handleSubmit(e) {
    setShowPreviewModal(!showPreviewModal);
    e.preventDefault();
  }

  return (
    <div className="container">
      {showFormPage && (
        <div className="formPage">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label>Receipt Type: </label>
            <select>
              <option>Internet Bill</option>
            </select>
            <br />
            <label>Name </label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              name="userName"
              maxLength={30}
            />
            <br />

            <label>Phone </label>
            <input
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              name="phoneNumber"
              maxLength={10}
            />
            <br />

            <label>EMail </label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              maxLength={30}
            />
            <br />

            <label>Address </label>
            <input
              type="text"
              onChange={(e) => setAddressLine1(e.target.value)}
              value={addressLine1}
              name="addressLine1"
              maxLength={30}
            />
            <br />
            <input
              type="text"
              onChange={(e) => setAddressLine2(e.target.value)}
              value={addressLine2}
              name="addressLine2"
              maxLength={30}
            />
            <br />
            <input
              type="text"
              onChange={(e) => setAddressLine3(e.target.value)}
              value={addressLine3}
              name="addressLine3"
              maxLength={30}
            />
            <br />

            <label>Plan duration </label>
            <select
              onChange={(e) => {
                const duration = planList.find(
                  (val) => val.text === e.target.value
                ).count;
                setPlanDuration(duration);
              }}
            >
              {planList.map((value) => (
                <option>{value.text}</option>
              ))}
            </select>
            <br />

            <label>Amount per month</label>
            <input
              type="number"
              onChange={(e) => setAmountPerMonth(e.target.value)}
              value={amountPerMonth}
              name="amountPerMonth"
              min="0.00"
              max="5000.00"
              step="0.01"
            />
            <br />

            <label>Starting date</label>
            <input
              type="date"
              onChange={(e) => setStartingDate(e.target.value)}
              name="startingDate"
            />
            <br />

            <input type="submit" value="GENERATE SCRIPT" />
          </form>
        </div>
      )}

      {showPreviewModal && (
        <PreviewModal
          receiptData={stateValues}
          closeModal={(showPreview) => setShowPreviewModal(showPreview)}
          fullScreenToggle={(showForm) => setShowFormPage(showForm)}
        />
      )}
    </div>
  );
};

export default ReceiptContainer;