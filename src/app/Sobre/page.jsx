import styles from './sobre.module.css';
import Header from '@/Components/Header/page.jsx'
import Footer from '@/Components/Footer/page.jsx'
import HeroContent from '@/Components/HeroContent/page.jsx'
import globals from '../globals.css'

export default function Sobre() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.heroSection}>
                <div className={styles.greetingsSection}>
                    <h1 className='title'>Sobre o Projeto</h1>
                    <h2 className='subtitle'></h2>
                </div>
                <div className={styles.main}>
                    <HeroContent title={"Objetivo com o Projeto"} text={"O objetivo com o projeto é a criação de uma aplicação que utilize de um API externa para busca de informações sobre cervejas."}/>
                    <HeroContent title={"Tecnologias Utilizadas"} text={"As tecnologias utilizadas no projeto incluem React, Node.js e a API externa de cervejas."}/>
                    <HeroContent title={"Desafios Enfrentados"} text={"Mudar Depois"}/>
                    <HeroContent title={"Lições Aprendidas"} text={"Mudar Depois"}/>
                    <HeroContent title={"Próximos Passos"} text={"Mudar Depois"}/>
                </div>
            </main>
            <Footer />
        </div>
    )
}