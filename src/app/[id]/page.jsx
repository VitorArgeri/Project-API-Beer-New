"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import axios from "axios"
import { FaStar, FaRegStar } from "react-icons/fa"
import styles from './beer.module.css'
import Header from "@/Components/Header/page"
import Footer from "@/Components/Footer/page"

export default function Beer() {
    const [beer, setBeer] = useState(null);
    const [beerDeleted, setBeerDeleted] = useState(false);
    const [beerUpdated, setBeerUpdated] = useState(false);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const beerId = params.id;

    const colors = {
        orange: "#F2C265",
        grey: "#a9a9a9"
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`https://api.sampleapis.com/beers/ale/${beerId}`);
            setBeerDeleted(true);
            window.location.href = '/Lista'
        } catch (error) {
            alert('Erro ao deletar a cerveja. Tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    }

    const handleUpdate = async (updatedData) => {
        try {
            const response = await axios.put(`https://api.sampleapis.com/beers/ale/${beerId}`, updatedData);
            setBeer(response.data);
            setBeerUpdated(true);
        } catch (error) {
            alert('Erro ao atualizar a cerveja. Tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    }

    const stars = Array(5).fill(0);

    useEffect(() => {
        const fetchBeer = async () => {
            try {
                const response = await axios.get(`https://api.sampleapis.com/beers/ale/${beerId}`);
                setBeer(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar cerveja:', error);
                setLoading(false);
            }
        };

        if (beerId) {
            fetchBeer();
        }
    }, [beerId]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!beer) {
        return <div>Cerveja não encontrada</div>;
    }


    return (
        <div className={styles.container}>
            <Header />
                <main className={styles.main}>
                    <section className={styles.imageContainer}>
                        <img src={beer.image} alt={beer.name} className={styles.beerImage} />
                    </section>
                    <section className={styles.beerInformation}>
                        <h1 className={styles.beerName}>{beer.name}</h1>
                        <div className={styles.beerRating}>
                            <p className={styles.average}>{beer.rating.average.toFixed(1)}</p>
                            <div className={styles.starsDiv}>
                                {stars.map((_, index) => {
                                    const roundedRating = Math.round(beer.rating.average);
                                    return (
                                        index < roundedRating ? 
                                        <FaStar
                                            key={index}
                                            size={24}
                                            color={colors.orange}
                                            style={{ marginRight: "5px", cursor: "default" }}
                                        /> :
                                        <FaRegStar
                                            key={index}
                                            size={24}
                                            color={colors.grey}
                                            style={{ marginRight: "5px", cursor: "default" }}
                                        />
                                    )
                                })}
                            </div>
                            <p className={styles.reviews}>{beer.rating.reviews} avaliações</p>
                        </div>
                        <h2 className={styles.beerPrice}>{beer.price}</h2>
                    </section>
                    <section className={styles.buttonsContainer}>
                        <button className={styles.editButton} onClick={handleUpdate}>Editar</button>
                        <button className={styles.deleteButton} onClick={handleDelete}>Deletar</button>
                    </section>
                </main>    
            <Footer />
        </div>
    )
}