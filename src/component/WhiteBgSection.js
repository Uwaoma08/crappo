import { useState } from "react";
import Button from "./Button";

export default () => {
  return (
    <>
      <div className="white-bg">
        <div className="align-center new-margin">
          <p className="bold-text flex margin">
            Trade securely and market the high growth cryptocurrencies
          </p>
        </div>
        <Coins />
        <FloatBox />
      </div>
    </>
  );
};

const FloatBox = () => {
  return (
    <div className="float float-mobile float-tab">
      <div className="grid">
        <input placeholder="Enter your hash rate"></input>
        <select id="#">
          <option value="second">TH/s</option>
          <option value="minute">TH/m</option>
          <option value="hour">TH/h</option>
        </select>
        <Button text="Calculate"/>
      </div>

      <div className="float-text">
        <p className="blue-text"> ESTIMATED 24 HOURS REVENUE</p>
        <p className="figure">
          {" "}
          0.554352 ETH <span>($1275)</span>
        </p>
        <p className="figure-text">
          Revenue will chnage based on mining difficulty and Etheruem price.{" "}
        </p>
      </div>
    </div>
  );
};

const Coins = () => {
  return (
    <div className="coins">
      <EachCoin
        image="../images/btc.svg"
        text="Bitcoin"
        span="BTC"
        digitText="Digital currency in which a record of transactions is maintained"
      />
      <EachCoin
        image="../images/eth.svg"
        text="Ethereum"
        span="ETH"
        digitText="Blockchain technology to create and run decentralised digital applications"
      />
      <EachCoin
        image="../images/lite.svg"
        text="Litecoin"
        span="LTC"
        digitText="Cryptocurrency that enables instant payments to anyone in the world"
      />
    </div>
  );
};

const EachCoin = ({ image, text, span, digitText }) => {
  const [isHoveredOn, setIsHoveredOn] = useState(false);
  return (
    <div className={`bitcoin ${isHoveredOn ? ' hovered-background' : ''}`} onMouseLeave={() => setIsHoveredOn(false)} onMouseEnter={() => setIsHoveredOn(true)}>
      <img src={image} />
      <p className="btc-text">
        {text} <span>{span}</span>
      </p>
      <p className="digital-text">{digitText}</p>
      {isHoveredOn ? (
        <Button text="Start Minning" showIcon={true} />
      ) : (
        // <Button text="Start Minning" />
        <img src="../images/big arrow Right.svg" />
      )}
    </div>
  );
};
