import React, { useState } from "react";
import './buttonView.css';
import Card from "../card/Card";
import './../card/Card.module.css'

import bookImg from "../../img/book.jpg";



const newCardsData = [
    {id: 3, title: "The Great Gatsby", img: bookImg, author: "F. Scott Fitzgerald", year: '1925', price: '1000' },
    {id: 4, title: "Moby Dick", img: bookImg, author: "Herman Melville", year: '1851', price: '800' },
    {id: 5, title: "The Catcher in the Rye", img: bookImg, author: "J.D. Salinger", year: '1951', price: '900' },
];

function ButtonView() {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="button">
            <div className="container__with__objects">
                {showMore && (
                    <div className="objects__cards">
                        {newCardsData.map((card, e) => (
                            <Card key={e} itemId={card.id} title={card.title} img={card.img} author={card.author}
                                  year={card.year} price={card.price} />
                        ))}
                    </div>
                )}
            </div>
            <div className="container">
                <div className="button__position">
                    <button className="objects__button" type="button" onClick={() => { setShowMore(!showMore);}}>
                        {showMore ? "View less" : "View more"}
                    </button>
                </div>
            </div>

        </section>
    );
}

export default ButtonView;
