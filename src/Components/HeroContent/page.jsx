import styles from './heroContent.module.css';

export default function HeroContent({title, text}) {
    return (
        <div className={styles.container}>
            <h1 className={styles.topicTitle}>{title}</h1>
            <p className={styles.topicText}>{text}</p>
        </div>
    )
}