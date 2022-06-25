import { useEffect } from "react";
import useAxiosFunction from "../../hooks/useAxiosFunction";
import axios from "../../apis/gists";

import styles from "./ListPage.module.css";
import Header from "../../components/Header/Header";
import ItemList from "../../components/ItemList/ItemList";
import Paginator from "../../components/Paginator/Paginator";
import Message from "../../components/Message/Message";
import useUrlWithPageParam from "../../hooks/useUrlWithPageParam";

function ListPage() {
    // We need this to fetch data when url changes.
    const currentPage = useUrlWithPageParam();
    const totalPages = 30;

    const [data, error, loading, axiosFetch] = useAxiosFunction();

    useEffect(() => {
        axiosFetch({
            axiosInstance: axios,
            method: 'get',
            url: `public?page=${currentPage}&per_page=30`
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);
    return (
        <div className={styles.app}>
            <Header />
            {loading && <Message text="Loading..." />}
            {!loading && error &&  <Message text="Ooops! We got an error!" />}
            {!loading && !error && data?.length && <ItemList data={data} />}
            {!loading && !error && !data && <Message text="Empty page." />}
            <Paginator currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
}

export default ListPage;
