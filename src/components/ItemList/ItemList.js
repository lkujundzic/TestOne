import styles from "./ItemList.module.css";
import ItemRow from "../ItemRow/ItemRow";

function ItemList({ data }) {
    return (
        <div className={styles.itemList}>
            {data.map((item, idx) => <ItemRow key={idx} avatar_url={item.avatar_url} filename={item.filename} />)}
        </div>
    );
}

export default ItemList;
