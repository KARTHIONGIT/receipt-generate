import brandLogo from "../../../common/graphics/BrandLogo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="brandLogoContainer">
        <img src={brandLogo} width={120} height={120} />
      </div>
      <div className="brandName">
        <h2>BHARATHI CABLES</h2>
      </div>
    </>
  );
};

export default Header;
