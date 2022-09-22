import logo from "./logo.svg";
import "./App.scss";
import Header from "./component/Header";
import WhyCrypto from "./component/WhyCrypto";
import WhiteBgSection from "./component/WhiteBgSection";
import PurpleBgSection from "./component/PurpleBgSection";
import Footer from "./component/Footer";
import PositionedAbsoluteImages from "./component/PositionedAbsoluteImages";
import MobileView from "./component/MobileView";
import "./Tablet.scss";
import "./Mobile.scss";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="App">
        <Header className="header" openMobileMenu={()=>setIsOpen(true)} />
        <WhyCrypto />
        <WhiteBgSection />
        <PurpleBgSection />
        <Footer />
        <PositionedAbsoluteImages />
      </div>
      {isOpen && (
        <MobileView
          isOpen={isOpen}
          closeMobileMenu={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default App;
