import styles from "../moduleCSS/welcome/welcome.module.css";

const Welcome = () => {
    console.log(styles);
    return (
        <>
            <div className={styles.welcome}>
                <h1 className={styles.h1}>welcome to my portfolio site!</h1>
                <p className={styles.p}>Here are some works and brief self-introduction. I'm happy that you take a glance at this page!</p>
            </div>
        </>
    )
}

export default Welcome;