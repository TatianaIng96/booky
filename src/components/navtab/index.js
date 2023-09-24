import { Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TextWhy from "../textWhy";
import styles from "./navtab.module.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function NavTab({ data }) {
  const tabDato = data?.benefits.data;
  const [activeTab, setActiveTab] = useState(tabDato[0]?.attributes.title);

  return (
    <div className={` ${styles.nav} container`}>
      <div className="row">
        <div className="col-lg-4 d-flex flex-column justify-content-center m-12 p12 ml-auto">
          <h1 className="text-center text-white fs-1">{data.title}</h1>
        </div>
        <div className="col-lg-8 mt-4">
          <div className={styles.nav}>
            <Tabs
              id="fill-tab-example"
              className="mb-3"
              fill
              activeKey={activeTab}
              onSelect={(selectedTab) => setActiveTab(selectedTab)}
            >
              {tabDato.map((tab) => (
                <Tab
                  key={tab.attributes.title}
                  eventKey={tab.attributes.title}
                  title={tab.attributes.title}
                >
                  <TextWhy
                    text={tab.attributes.description}
                    image={tab.attributes.image.data.attributes.url}
                  />
                </Tab>
              ))}
            </Tabs>
          </div>
          <div className="row">
            <div className="col">
              <Button className={`${styles.buy}`}>Buy Book</Button>
            </div>
            <div className="col">
              <Button className={`${styles.sell}`}>Sell Book</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavTab;
