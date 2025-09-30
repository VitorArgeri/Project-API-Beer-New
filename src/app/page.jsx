import React from 'react'
import Header from '../Components/Header/page'
import Footer from '../Components/Footer/page'
import styles from './page.module.css'
import './globals.css'

export default function page() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className='title'>Bem vindo ao 🍺 <span className={styles.highlight}>Project API Beer</span></h1>
                <section className={styles.perfil}>
                    <div className={styles.imageContainer}>
                        <img src="https://assets1.ignimgs.com/thumbs/userUploaded/2018/6/21/hollowknight1280-1529636220082.jpg" alt="Profile Image" className={styles.profileImage} />
                    </div>
                    <div className={styles.division}></div>
                    <div className={styles.textContainer}>
                        <div className={styles.perfilBlock}>
                            <p className={styles.perfilName}>Nome</p>
                            <p className={styles.perfilItem}>Vitor Argeri</p>
                        </div>
                        <div className={styles.perfilBlock}>
                            <p className={styles.perfilName}>Email</p>
                            <p className={styles.perfilItem}>vitor.argeri@gmail.com</p>
                        </div>
                        <div className={styles.perfilBlock}>
                            <p className={styles.perfilName}>Qualificações</p>
                            {/* Mudar Depois */}
                            <div className={styles.perfilCards}>
                                <div className={styles.card}>
                                    <p className={styles.cardTitle}>🌍 Inglês Fluente</p>
                                </div>
                                <div className={styles.card}>
                                    <p className={styles.cardTitle}>🖥️ Curso Técnico - DS</p>
                                </div>
                                <div className={styles.card}>
                                    <p className={styles.cardTitle}>🗂️ Pacote Office Completo</p>
                                </div>
                                <div className={styles.card}>
                                    <p className={styles.cardTitle}>🎮 Curso de Criação de Videogames</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.perfilBlock}>
                            <p className={styles.perfilName}>Comentário</p>
                            <p className={styles.perfilItem}>Olá, sou Vitor Argeri, estudante de desenvolvimento de sistemas no SENAI. Além de gostar muito de programação, tenho alguns hobbies como ler livros e mangás, jogar videogames e também ir para a academia. Espero que você goste do projeto!</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
