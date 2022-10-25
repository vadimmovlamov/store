import styles from "./styles.module.scss";
import VerticalTabs from "../../../components/baner";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <VerticalTabs />
      </div>
    </div>
  );
};

export default Home;
