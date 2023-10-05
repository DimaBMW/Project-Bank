import Header from "./section/Header/Header";
import Main from "./section/Main/Main";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Main />
    </div>
  );
}

export default Home;
