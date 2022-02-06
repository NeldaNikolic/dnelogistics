import classes from "./Infromation.module.css";
import Icon from "../icon/Icon";
import { FaShippingFast } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
const Infromation = () => {
  return (
    <>
      <div className={classes.infromatonmainDiv}>
        <div className={classes.infromatonmainDivTwo}>
          <div>
            <div className={classes.infromatonmainDivThree}>
              <FaShippingFast className={classes.infroiconh2} />
              <h2 className={classes.infromatonmah2}>Shipper and Carries</h2>
              <h4 className={classes.infromatonmah4}>
                mall or local carriers make up the majority of the U.S. Private
                carriers haul freight on the shipper’s vehicle and don’t charge
                additional fees.Usually, third-party logistics providers already
                have a wide network of trusted carriers and can provide
                logistics services of any type.
              </h4>
              <a href="/#contact">
                <button className={classes.infrobutton}>Get a Quote</button>
              </a>
            </div>
            <div className={classes.infromatonmainDivThree}>
              <FaMapMarkerAlt className={classes.infroiconh2} />
              <h2 className={classes.infromatonmah2}>Delivery and Tracking</h2>
              <h4 className={classes.infromatonmah4}>
                company responsible for organising and transporting goods from
                one point to another. Generally, the shipper bears the cost of
                freight, except otherwise stated in the transport contract
                before shipment.
              </h4>
              <a href="/#contact">
                <button className={classes.infrobutton}>Confirmation</button>
              </a>
            </div>
            <div className={classes.infromatonmainDivThree}>
              <RiCustomerService2Fill className={classes.infroiconh2} />
              <h2 className={classes.infromatonmah2}>Coustomer services</h2>
              <h4 className={classes.infromatonmah4}>
                There are so many shipping carriers to choose from, and each
                carrier offers their own set of services. When it comes time to
                choose one, it’s crucial to think about the services that fit
                your needs and cater to your customers.To optimize shipping, you
                should also have a basic understanding of how shipping zones
                work.
              </h4>
              <a href="/#contact">
                <button className={classes.infrobutton}> contact</button>
              </a>
            </div>
            <AiOutlineGlobal className={classes.infroiconone} />
            <AiOutlineGlobal className={classes.infroiconTwo} />
          </div>
        </div>
        <Icon />
      </div>
    </>
  );
};

export default Infromation;
