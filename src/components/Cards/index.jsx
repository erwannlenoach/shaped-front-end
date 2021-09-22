import React from 'react'
import { useState, useEffect } from 'react'
import img from 'assets/surfboard.jpg'
import './style.scss'


const Cards = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://[::1]:3001/items")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    console.log(result)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <div class='container-grid'>
                    <div class="card">
                        <div class="img-card">
                            <img class="img-item" src={img} />
                        </div>
                        <div class="card-text">
                            <h3 id="title-card">{item.title}</h3>
                            <p id="paragraph-card">{item.description}</p>
                            <p id="paragraph-card">{item.price}</p>
                            <button class="button-rounded-blue">Show More</button>
                        </div>
                    </div>
                </div>
                ))}
            </ul>
        );
    }


}

export default Cards