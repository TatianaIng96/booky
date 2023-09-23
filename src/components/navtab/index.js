import { Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TextItem from "../textItem";
import styles from "./navtab.module.css";

function NavTab() {
  return (
    <div className={styles.nav}>
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="home" title="Home">
          Tab content for Home
          <TextItem />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Tab content for Profile
        </Tab>
        {/* <Tab eventKey="longer-tab" title="Loooonger Tab">
          Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          Tab content for Contact
        </Tab> */}
      </Tabs>
    </div>
  );
}

export default NavTab;
