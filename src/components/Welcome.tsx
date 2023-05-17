import styles from "../moduleCSS/welcome/welcome.module.css";

const Welcome = () => {
    console.log(styles);
    return (
        <p className={styles.welcome}>welcome</p>
    )
}

export default Welcome;