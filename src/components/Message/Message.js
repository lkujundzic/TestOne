import styles from "./Message.module.css";

function Message({ text }) {
    return <div className={styles.message}>{text}</div>;
}

export default Message;