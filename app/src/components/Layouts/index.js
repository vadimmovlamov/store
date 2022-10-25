import Header from "../Header";
import Footer from "../Footer";

import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
