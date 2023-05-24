import styles from "../../../moduleCSS/welcome/welcome.module.css";

const JaWelcome = () => {
    console.log(styles);
    return (
        <>
            <div className={styles.welcome}>
                <h1 className={styles.h1}>welcome to my portfolio site!</h1>
                <p className={styles.p}>成果物たちや軽い自己紹介などが載っております。最後まで見ていただけると嬉しいです！</p>
            </div>
        </>
    )
}

export default JaWelcome;