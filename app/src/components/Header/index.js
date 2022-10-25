import { memo } from "react";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../selectors";

import styles from "./styles.module.scss";
import ButtonAppBar from "../AppBar";

const Header = () => {
  const isAuth = useSelector(isAuthSelector);

  return (
    <div className={styles.wrapper}>
      <ButtonAppBar />
    </div>
  );
};

export default memo(Header);
