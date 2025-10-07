import React from 'react'
import styles from './header.module.css'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.logo}><a className={styles.logoLink} href="/">🍺 Project API Beer</a></h1>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}><a href="/" className={styles.navLink}>Home</a></li>
                        <li className={styles.navItem}><a href="/Lista" className={styles.navLink}>Listagem</a></li>
                        <li className={styles.navItem}><a href="/create" className={styles.navLink}>Criação</a></li>
                        <li className={styles.navItem}><a href="/details" className={styles.navLink}>Detalhes</a></li>
                        <li className={styles.navItem}><a href="/Sobre" className={styles.navLink}>Sobre a Projeto</a></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.line}></div>
        </div>
    )
}
