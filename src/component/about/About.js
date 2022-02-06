import classes from "./About.module.css";
import { SiCodesandbox } from "react-icons/si";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className={classes.aboutmain}>
      <SiCodesandbox className={classes.aboutIconOne} />
      <SiCodesandbox className={classes.aboutIconTwo} />
      <h3 className={classes.abouth3Title}>
        Page Trucking has spent 36 years cultivating it's network of owner
        operators and customers by providing excellent customer services,
        customized bulk trucking solutions and providing a family environment to
        employees and contractors.
      </h3>
      <table className={classes.tableAboutFull}>
        <tr className={classes.tableAboutTitleTh}>
          <th>JOIN THE FAMILY</th>
          <th>ABOUT OUR COMPANY</th>
          <th>CARRIES/SHIPPERS</th>
        </tr>
        <tr className={classes.tableAboutTitle}>
          <td className={classes.tableDAboutPragraph}>
            Page Trucking has a long history of providing amazing
            benefits,training and repair services to our owner operators. We are
            always looking for dedicated individuals to join our family of the
            most owner operator friendly" operations, accounting and
            safety/compliance departments in the bulk freight industry
          </td>

          <td className={classes.tableDAboutPragraph}>
            Page Material Management is a full service material management
            company with storage, handling, sorting, baling, briquetting and
            trans loading capabilities that is fully integrated with Page
            Transportation's North American logistics network. Our specific
            experience is related to the agriculture, recycling and waste
            industries. Through this we drive value for our customers by
            utilizing creative out of the box solutions in a business model that
            is streamlined and effective for those customers
          </td>
          <td className={classes.tableDAboutPragraph}>
            Our team of trained inspectors and mechanics will ensure that your
            truck passes inspection quickly, so you can focus on transporting
            your haul.y Page Trucking has very competitive pricing, highly
            trained professionals and comprehensive service to make sure your
            wheels keep turning.
          </td>
        </tr>
      </table>

      <Link to="/about">
        <button className={classes.buttonAboutone}>ABOUT US</button>
      </Link>
      <Link to="/Information">
        <button className={classes.buttonAboutTwo}>Learn More</button>
      </Link>
      <Link to="/about">
        <button className={classes.buttonAboutThree}>COMTACT US</button>
      </Link>
    </div>
  );
};

export default About;
