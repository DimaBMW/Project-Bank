import styles from "../../styles/Main/Main.module.scss";
import Link from "../../../../../components/ui/Link";
import Title from "../../../../ui/Title";
import Logo from "../../../../ui/Logo";
import Selector from "../../../../Selector_Main/Selector";
import Image from "../../../../ui/Image";
import Buton from "../../../../Button/Button";
import icon1 from "../../../../../assets/Icon/MS.svg";
import icon4 from "../../../../../assets/Icon/CopyMain.svg";
import plus from "../../../../../assets/Icon/plus.svg";
import minus from "../../../../../assets/Icon/minus.svg";
import icon5 from "../../../../../assets/Icon/ivonsaitbar.svg";
import strelka from "../../../../../assets/Icon/strelka.svg";
// Main box
import Main_box from "./Main_box";

function Main() {
  return (
    <section className={styles.main}>
      <div className={styles.main_container}>
        <div className={styles.main_container__saitbar}>
          <div className={styles.saitbar_Cards}>
            <div className={styles.saitbar_Cards_showCard}>
              <div className={styles.saitbar_Cards_showCard__title}>
                <Title className="showcard__title" text="Cards" level="1" />
                <Link className="showcard" name="Show All" />
              </div>
              <div className={styles.saitbar_Cards_showCard__Card}>
                <div className={styles.purple_blok}></div>
                <div className={styles.blackcard}>
                  <div className={styles.blackcard_title}>
                    <Title
                      className="balckcard__title"
                      text="DIMA YAKOVLEV"
                      level="1"
                    />
                    <Logo src={icon1} className="icon_card" />
                  </div>
                  <div className={styles.blackcard_data}>
                    <div className={styles.blackcard_data__number}>
                      <span className={styles.number}>**** **** 8910</span>
                      <button className={styles.copy}>
                        <Logo className="copy" src={icon4} />
                      </button>
                    </div>
                    <div className={styles.blackcard_data__cvv}>
                      <span className={styles.number}>CVV</span>
                      <button className={styles.copy}>
                        <Logo className="copy" src={icon4} />
                      </button>
                    </div>
                  </div>
                  <div className={styles.blackcard_info}>
                    <span className={styles.number}>05/24</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.saitbar_Cards_menu}>
              <Selector />
              <Selector />
              <Selector />
              <Selector />
            </div>
            <div className={styles.saitbar_Cards_button}>
              <div className={styles.saitbar_Cards_button__prt1}>
                <Buton className="purple" text="Add Card" src={plus} />
              </div>
              <div className={styles.saitbar_Cards_button__prt2}>
                <Buton className="red" text="Remove" src={minus} />
              </div>
            </div>
          </div>
          <div className={styles.saitbar_iventBlock}>
            <div className={styles.iventblock_backimg}></div>
            <div className={styles.iventblock_main}>
              <div>
                <Image src={icon5} alt="icon" className="iventblock-img"/>
              </div>
              <div className={styles.iventblock_title}>
                <Title
                  className="iventblock__title"
                  text="You have USDT 1.000 pending money.it will be ready in 2 bussiness days"
                  level="1"
                />
                <div className={styles.inventblock__link}>
                    <Link className="inventvlok-link" name="Get your money now"/>
                    <Image src={strelka} alt="стрелка" className="inventblock-strelka"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.main_container__mainbox}>
          <Main_box/>
        </div>
      </div>
    </section>
  );
}

export default Main;
