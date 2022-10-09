import React from "react";
import styles from "./styles.module.scss";
import BasicSelect from "../../components/Header/changeLang";
import { ROUTE_NAMES } from "../../router/routeNames";
import { Link } from "react-router-dom";
import PrimarySearchAppBar from "../../components/Header/menuHeader";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_content}>
        <div className={styles.header_up}>
          <div>
            <h3>Welcome to our online shop</h3>
          </div>

          <div className={styles.header_up_right}>
            <div>
              <BasicSelect />
            </div>
            <div>|</div>
            <div>
              <Link to={ROUTE_NAMES.SIGN_UP} style={{ color: "white" }}>
                Login or Sign up
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.header}>
          <PrimarySearchAppBar />
        </div>
        <div className={styles.menu}></div>
      </div>
    </div>
  );
};

export default Home;
