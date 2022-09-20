import logo from "./logo.svg";
import "./App.scss";
import Header from "./component/Header";
import WhyCrypto from "./component/WhyCrypto";
import WhiteBgSection from "./component/WhiteBgSection";
import PurpleBgSection from "./component/PurpleBgSection";
import Footer from "./component/Footer";
import PositionedAbsoluteImages from "./component/PositionedAbsoluteImages";
import "./Tablet.scss"
import "./Mobile.scss"

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <WhyCrypto />
      <WhiteBgSection />
      <PurpleBgSection />
      <Footer />
      <PositionedAbsoluteImages />
    </div>
  );
}

export default App;
