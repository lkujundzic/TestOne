import { useState } from "react";
import styles from "./ItemRow.module.css";

function ItemRow({ avatar_url, filename}) {
    
    const [isSelected, setIsSelected] = useState(false);
    const [animateImage, setAnimateImage] = useState(false);

    return (
        <div className={styles.itemRow} onClick={() => { setIsSelected(prev => !prev); setAnimateImage(true); }}>
            <img className={`${styles.itemImage} ${isSelected && styles.itemImageSelected}`} src={avatar_url} alt="Avatar" />
            {isSelected && animateImage && 
                <img className={styles.itemCenterImage} src={avatar_url} alt="Avatar"
                    onAnimationEnd={() => { setAnimateImage(false); }} />
            }
            <span className={`${styles.itemText} ${isSelected && styles.itemTextSelected}`}>{filename}</span>
        </div>
    );
}

export default ItemRow;
