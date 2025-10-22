import { Link } from "react-router-dom";
import styles from './Navbar.module.css'; 

const Navbar = () => {
  return(
    <nav>
      <ul className={styles.lista}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>Inicio</Link>
          <Link to="/tecnologia" className={styles.link}>Tecnologia</Link>
          <Link to="/populares" className={styles.link}>Populares</Link>
          <Link to="/contacto" className={styles.link}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;