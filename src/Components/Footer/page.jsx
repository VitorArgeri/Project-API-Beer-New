import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.line}></div>
            <div className={styles.footer}>
                <p className={styles.logo}>🍺 Project API Beer</p>
                <p className={styles.text}>Desenvolvido por <a href="https://github.com/VitorArgeri" target="_blank" rel="noopener noreferrer" className={styles.name}>Vitor Argeri</a></p>
            </div>
        </div>
    )
}
