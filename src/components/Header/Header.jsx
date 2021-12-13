import styles from "./Header.module.css";
import covidImage from "../../assets/images/image.png";

const Header = () => {
    return (
        <img src={covidImage} alt="COVID19" className={styles.image} />
    );
}

export default Header;