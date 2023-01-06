import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return <div className={styles.Navbar}>
        <h3><Link to='/'>Home</Link></h3>
        <h3><Link to='/following'>Following</Link></h3>
        <h3><Link to='/answer'>Answer</Link></h3>
    </div>
}