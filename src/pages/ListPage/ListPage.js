import styles from "./ListPage.module.css";
import Header from "../../components/Header/Header";
import ItemList from "../../components/ItemList/ItemList";
import Paginator from "../../components/Paginator/Paginator";

function ListPage() {
    return (
        <div className={styles.app}>
            <Header />
            <ItemList />
            <Paginator />
        </div>
    );
}

export default ListPage;
