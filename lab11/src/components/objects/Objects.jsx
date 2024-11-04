import React from "react";

import './objects.css'
import Card from '../card/Card'


import bookImg from '../../img/book.jpg'

    const cardsData = [
        {book_id: 0, title: "The Great Gatsby", img: bookImg, author: "F. Scott Fitzgerald", year: '1925', price: '1000' },
        {book_id: 1, title: "Moby Dick", img: bookImg, author: "Herman Melville", year: '1851', price: '800' },
        {book_id: 2, title: "The Catcher in the Rye", img: bookImg, author: "J.D. Salinger", year: '1951', price: '900' },
    ];

const Objects = () => {
    return (
        <section className="objects">
            <div className="container">
                <div className="objects__cards">
                    {cardsData.map((card, e) => (
                        <Card key={e} itemId={card.book_id} title={card.title} img={card.img} author={card.author}
                              year={card.year} price={card.price} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Objects;
