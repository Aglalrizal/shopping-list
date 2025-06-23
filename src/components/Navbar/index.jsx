import styles from "./Navbar.module.css";
import bagIcon from "../../assets/bag-icon.png";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src={bagIcon} alt="Shop Icon" className={styles.navIcon} />
      <h1 className={styles.navTitle}>Shopping List</h1>
    </nav>
  );
};

export default Navbar;
