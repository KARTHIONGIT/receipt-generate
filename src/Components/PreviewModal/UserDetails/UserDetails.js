import "./UserDetails.css";

const UserDetails = ({ receiptData }) => {
  const {
    userName,
    phoneNumber,
    email,
    addressLine1,
    addressLine2,
    addressLine3,
  } = receiptData;
  return (
    <div className="userDetails">
      <h4>Billing Address:</h4>
      {userName}
      <br />
      {addressLine1}
      <br />
      {addressLine2}
      <br />
      {addressLine3}
      <br />
      <br />
      <b>Contact No :</b> {phoneNumber}
      <br />
      <br />
      <b>Mail:</b> {email}
    </div>
  );
};

export default UserDetails;