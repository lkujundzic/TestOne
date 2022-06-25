import styles from "./Paginator.module.css";
import { useLocation, useNavigate } from "react-router-dom";

function Paginator({currentPage, totalPages}) {

    // For the buttons
    let { pathname: path } = useLocation();
    const navigate = useNavigate();

    // If it is index page, change it to "list", for the links to look nicer.
    if(!path.endsWith("list")) path += "list";

    const handleNavigate = (e, url) => {
        e.preventDefault();
        navigate(url);
    }

    const maxPageButtonsPerPage = 3;
    let controls = [];

    // Do we have more than one page?
    if(totalPages > 1) {
        // Middle button position, for the current button.
        let maxPageButtonsPerPageIsEven = (Math.ceil(maxPageButtonsPerPage / 2) === Math.floor(maxPageButtonsPerPage / 2))? 1 : 0;
        let middleButtonPosition = Math.ceil(maxPageButtonsPerPage / 2) + maxPageButtonsPerPageIsEven;

        // Calculate first and last page for buttons.
        let firstPageForButtons = currentPage - middleButtonPosition + (maxPageButtonsPerPageIsEven? 0 : 1);
        let lastPageForButtons = firstPageForButtons + maxPageButtonsPerPage - 1;

        if(firstPageForButtons < 1) {
            firstPageForButtons = 1;
            lastPageForButtons = firstPageForButtons + maxPageButtonsPerPage - 1;

            if(lastPageForButtons > totalPages) {
                lastPageForButtons = totalPages;
            }
        } else {
            if(lastPageForButtons > totalPages) {
                lastPageForButtons = totalPages;
            }

            firstPageForButtons = lastPageForButtons - maxPageButtonsPerPage + 1;

            if(firstPageForButtons < 1) {
                firstPageForButtons = 1;
            }
        }

        // Do we need control to go to the first page on the left side of page buttons?
        if(firstPageForButtons > 1) {
            controls.push(
                <a 
                    key={controls.length} 
                    className={styles.number} 
                    href={`${path}?page=1`}
                    onClick={(e) => { handleNavigate(e, `${path}?page=1`); }}
                    >1</a>);
        }

        // Do we need ellipsis before the left side of page buttons?
        if(firstPageForButtons > 2) {
            controls.push(
                <span key={controls.length} className={styles.inactive}>...</span>);
        }

        // Page buttons.
        for(let pageButtonIndex = firstPageForButtons; pageButtonIndex < (lastPageForButtons + 1); pageButtonIndex++) {
            controls.push(
                (pageButtonIndex === currentPage)?
                    <span key={controls.length} className={styles.inactive}>{pageButtonIndex}</span> 
                    :
                    <a 
                        key={controls.length} 
                        className={styles.number} 
                        href={`${path}?page=${pageButtonIndex}`}
                        onClick={(e) => { handleNavigate(e, `${path}?page=${pageButtonIndex}`); }}
                        >{pageButtonIndex}</a>
            );
        }

        // Do we need ellipsis before the right side of page buttons?
        if(lastPageForButtons < (totalPages - 1)) {
            controls.push(<span key={controls.length} className={styles.inactive}>...</span>);
        }

        // Do we need control to go to the last page on the right side of page buttons?
        if(lastPageForButtons < totalPages) {
            controls.push(<a 
                key={controls.length} 
                className={styles.number} 
                href={`${path}?page=${totalPages}`}
                onClick={(e) => { handleNavigate(e, `${path}?page=${totalPages}`); }}
                >{totalPages}</a>);
        }
    }

    return (
        <div className={styles.paginator}>
            {controls}
            <button className={styles.button} disabled={currentPage === 1} onClick={() => { navigate(`${path}?page=${currentPage - 1}`); }}>&lt;</button>
            <button className={styles.button} disabled={currentPage === totalPages} onClick={() => { navigate(`${path}?page=${currentPage + 1}`) }}>&gt;</button>
        </div>
    );
}

export default Paginator;
