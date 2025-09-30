import React from 'react'
import styles from './header.module.css'

export default function Header() {
    return (
        <div className={styles.container}>
            <h1 className={styles.logo}>🍺 Project API Beer</h1>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="/" className={styles.navLink}>Home</a></li>
                    <li className={styles.navItem}><a href="/list" className={styles.navLink}>Listagem</a></li>
                    <li className={styles.navItem}><a href="/create" className={styles.navLink}>Criação</a></li>
                    <li className={styles.navItem}><a href="/details" className={styles.navLink}>Detalhes</a></li>
                    <li className={styles.navItem}><a href="/about" className={styles.navLink}>Sobre a API</a></li>
                </ul>
            </nav>
        </div>
    )
}
