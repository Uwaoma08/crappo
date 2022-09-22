import Button from "./Button";
import { motion } from "framer-motion";

export default () => {
  return (
    <>
      <div className="why-crypto">
        <motion.div
        initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  // viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="numbers"
        >
          <Stat
            icon="../images/graph-icon.svg"
            text1="$30B"
            text2="Digital Currency Exchanged"
          />
          <Stat
            icon="../images/user-icon.svg"
            text1="10M+"
            text2="Trusted Wallets Investor"
          />
          <Stat
            icon="../images/earth-icon.svg"
            text1="195"
            text2="Countries Supported"
          />
        </motion.div>
        <CrappoBanner />
        <CheckHowMuchSection />
      </div>
    </>
  );
};

const Stat = ({ icon, text1, text2 }) => {
  return (
    <div className="stat">
      <img src={icon} />
      <div className="text">
        <p className="bold-text">{text1}</p>
        <p className="normal-text">{text2}</p>
      </div>
    </div>
  );
};

const CrappoBanner = () => {
  return (
    <div className="crappo-banner">
      <div className="crappo-left-banner">
        <img src="../images/cylinder.svg" />
      </div>

      <div className="crappo-right-banner">
        <h4 className="crappo-text">Why you should choose CRAPPO</h4>
        <p className="normal-text">
          Experience the next generation cryptocurrency platform. No finncial
          borders, extra fees and fake reviews.
        </p>
        <Button text="Learn More" />
      </div>
    </div>
  );
};

const CheckHowMuchSection = () => {
  return (
    <div className="align-center">
      <p className="bold-text margin-bottom">Check how much you can earn</p>
      <p className="normal-text">
        Let's chexk your hash rate to see how much you can earn today
      </p>
      <p className="normal-text">
        Exercisation vaniam consequesat sunt, nestud amet
      </p>
    </div>
  );
};
