import "./Selector.scss";
import Title from "../ui/Title";
import Image from "../ui/Image";
import CardIcon from "../../assets/Icon/Icon(Card).svg";
import SelecIcon from "../../assets/Icon/Icon(Select).svg";

function Selector(){
    return(
        <div className="selector__container">
            <div className="select-name">
                <div className="icon-box">
                    <Image className="selec__icon" alt="Иконка" src={CardIcon}/>
                </div>
                <Title className="select__title" level="1" text="Show Card Details"/>
            </div>
            <div className="select-icon">
                <Image className="selec__icon" alt="Иконка" src={SelecIcon}/>
            </div>
        </div>
    );
}

export default Selector;