"use client"
import styles from './lista.module.css'
import Header from '@/Components/Header/page.jsx'
import Footer from '@/Components/Footer/page.jsx'
import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

export default function Lista() {
    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(false)

    const beersArray = Array.isArray(beers) ? beers : [];

    const searchForBeers = async () => {
        setLoading(true)
        try {
            const response = await axios.get('https://api.sampleapis.com/beers/ale')
            const data = response.data;
            console.log('Dados recebidos:', data)
            console.log('Primeira cerveja:', data[0])
            setBeers(data)
        } catch (error) {
            console.error('Erro ao buscar cervejas:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.heroSection}>
                <div className={styles.greetingsSection}>
                    <h1 className='title'>Lista de Cervejas 🍻</h1>
                    <p className="subtitle">Nesta página você encontrará informações sobre as mais variadas cervejas disponíveis.</p>
                </div>
                <div className={styles.main}>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} onClick={searchForBeers} disabled={loading}>
                            {loading ? "Carregando..." : "Buscar Cervejas"}
                        </button>
                    </div>

                    <div className={`${styles.list} ${beersArray.length > 0 ? styles.listWithBackground : styles.listEmpty}`}>
                        {beersArray.length > 0 ? (
                            beersArray.map((beer) => (
                                <Link key={beer.id} href={`/${beer.id}`} className={styles.beerCard}
                                >
                                    <div className={styles.imageContainer}>
                                        <img src={beer.image} alt={beer.name} className={styles.beerImage} />
                                    </div>
                                    <div className={styles.textContainer}>
                                        <p className={styles.beerName}>{beer.name}</p>
                                        <p className={styles.beerPrice}>{beer.price}</p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className={styles.noResults}>
                                {beersArray.length === 0
                                    ? "Clique no botão 'Buscar Cervejas' para carregar os dados!"
                                    : `Nenhuma cerveja encontrada`
                                }
                            </p>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}