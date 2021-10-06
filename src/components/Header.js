
import { Link } from "react-router-dom";
import styles from "./header.module.css";
 export const Header = () => {
    return (
        <div>
            <header>
                <nav className={styles.nav}>
                    <div className={styles.container}>
                        <a href="/" className={styles.logo}>
                            Aplication CRUD
                        </a>
                        <div className={styles.bar}>
                        <span>James</span>
                        <Link to="/">Logout</Link>
                        </div>
                        
                    </div>
                </nav>
            </header>
        </div>
    )
}