import styles from "../../styles/Header/Header.module.scss";
import Logo from "../../../../ui/Logo";
import Link from "../../../../ui/Link";
import imgLogo from "../../../../../assets/Icon/logo.svg";
import PersoneLogo from "../../../../../assets/Icon/image.png";

function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_container_persone}>
          <div className={styles.header_container_logo}>
            <Logo src={imgLogo} className="main-logo" />
          </div>
          <div className={styles.header_container_greeting}>
            <div className={styles.greeting_box}>
              <span className={styles.greeting_box__span}>
                Welcome back,
                <span className={styles.greeting_box__span_puple}>Dima!</span>
              </span>
              <Logo src={PersoneLogo} className="personelogo" />
            </div>
          </div>
        </div>
        <div className={styles.header_container_navigation}>
          <div className={styles.navigation_box}>
            <Link className="header-link" name="Summary" />
            <Link className="header-link" name="Cards" />
            <Link className="header-link" name="Activity" />
            <Link className="header-link" name="Recipients" />
            <Link className="header-link" name="Help Center" />
            <Link className="header-link" name="Earn Gifts" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
