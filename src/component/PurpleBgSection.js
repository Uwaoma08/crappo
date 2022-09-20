import Button from "./Button";

export default () => {
  return (
    <div className="purple-bg">
      <div className="">
        <p className="bold-text-purple flex">
          Market sentiments, portfolios, and run the infrastructure of your
          choice
        </p>
      </div>
      <div className="invest-smart">
        <TextAndButton firstText="Invest smart" secondText="Get full statistic information about behaviour of the buyers and
        sellers, will help you to make the decitions" ShowButton={true}/>
        <img src="../images/chart.svg" />
      </div>

      <div className="invest-smart display-grid">
      <img className="stat-image" src="../images/statistic.svg" />
      <TextAndButton firstText="Detailed statistics" secondText="View mining related infomation in real time, at any piont at any locaton and decide which pool you want to mine in" ShowButton={true}/>

      </div>

      <div className="invest-smart">
        <TextAndButton firstText="Grow your profit and track your investment" secondText="Use advanced analytical tools. Clear trading view charts let you track current and historical profit investments.
        " ShowButton={true}/>
        <img src="../images/table.svg" />
      </div>

      <div className="blue-bar">
      
      <TextAndButton  firstText="Start minning now" secondText="Join now with CRAPPO to get the latest news and start mining now.
        " />
        <div className="text-btn">
          <input placeholder="Enter your hash rate"></input>
          <Button bgColor="white-bg-color" text="Subscribe"/>
        </div>
      </div>
    </div>
  );
};







const TextAndButton = ({firstText, bgColor, secondText, ShowButton}) => {
  return (
    <div className="crappo-right-banner padding-top">
      <h4 className="crappo-text smart-text">{firstText}</h4>
      <p className="normal-text">
        {secondText}
      </p>
      {ShowButton && <Button bgColor={bgColor} text="Learn More"/>}
    </div>
  );
};
