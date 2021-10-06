import { Link, useParams } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => {

  const { user } = useParams();

    return (
        <div>
            <header>
                <nav className={styles.nav}>
                    <div className={styles.container}>
                        <a href="/" className={styles.logo}>
                            Aplication CRUD
                        </a>
                        <div className={styles.bar}>
                        <span className={styles.title}>User: {user} 🎫</span>
                        <Link to="/" style={{textDecoration:"none",color:"white"}}>Logout</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}