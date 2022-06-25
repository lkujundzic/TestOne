import styles from "./ItemRow.module.css";

function ItemRow() {
    return (
        <div className={styles.itemRow}>
            <img className={styles.itemImage} src="" alt="" />
            <span className={styles.itemText}>MySQL_macOS_Sierra.md</span>
        </div>
    );
}

export default ItemRow;
