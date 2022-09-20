import Logo from "./Logo";

export default () => {
  return (
    <>
      <footer className="footer">
        <Logo />
        <div className="link-items">
          <p className="link-text">Quick Link</p>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="link-items">
          <p className="link-text">Resources</p>
          <ul>
            <li>Download Whitepaper</li>
            <li>Smart Token</li>
            <li>Blockchain Explorer</li>
            <li>Crypto API</li>
            <li>Interest</li>
          </ul>
        </div>
        <div className="text-payment">
          <h4 className="crappo-text smart-text">We accept the following payment systems</h4>
          <div className="payment-system">
          <img src="../images/visa.svg"/>
          <img src="../images/mastercard.svg"/>
          <img src="../images/bitcoin.svg"/>
          </div>
        </div>
      </footer>
      <div className="social-media-footer footer2 ">
        <div className="left-footer">
        &copy; 2021 CRAPPO. All rights reserved
        </div>
        <div className="right-footer">
       <li> <img src="../images/facebook.svg"/> </li> 
       <li> <img src="../images/instagram.svg"/> </li> 
       <li> <img src="../images/youtube.svg"/> </li> 
       <li> <img src="../images/twitter.svg"/> </li>
       <li> <img src="../images/linkedin.svg"/> </li>  
        
        </div>

      </div>
    </>
  );
};
