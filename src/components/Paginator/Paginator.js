import styles from "./Paginator.module.css";

function Paginator({current, pages}) {
    return (
        <div className={styles.paginator}>
            <div>
                <span className={styles.inactive}>1</span>
                <a className={styles.number} href="#blank">2</a>
                <span className={styles.inactive}>...</span>
                <a className={styles.number} href="#blank">36</a>
                <a className={styles.number} href="#blank">37</a>
                <button className={styles.button} disabled>&lt;</button>
                <button className={styles.button}>&gt;</button>
            </div>
        </div>
    );
}

export default Paginator;
