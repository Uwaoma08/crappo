import Button from "./Button";
import Logo from "./Logo";


export default ({ className }) => {
  return (
    <>
    <header className={`${className}`}>
      <div className="main-nav">
        <Logo />
        <div className="right-nav">
          <MenuBar/>
          <Button text="Register"/>
        </div>
      </div>
      <Banner/>
      </header>
    </>
  );
};


const MenuBar = () => {
  return (
    <div className="menu-bar">
      <ul className="menu-items">
        <li>Products</li>
        <li>Features</li>
        <li>Abouts</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

const Banner = ()=>{
    return(
      <>
        <div className="banner">
            <div className="left-banner">
                <div className="info">
                    <div className="info-btn">
                        <p>75% save</p>
                    </div>
                    <div className="for-the-black">
                        <p>For the Black Friday weekend</p>
                    </div>
                </div>
                <h3>Fastest & secure platform to invest in crypto</h3>
                <p className="buy-sell">Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
                <Button text="Try for FREE" showIcon={true}/>
            </div>
            
            <div className="right-banner">
                <img src="../images/illustration.svg"/>
            </div>
        </div>
        x
        </>
    )
}

