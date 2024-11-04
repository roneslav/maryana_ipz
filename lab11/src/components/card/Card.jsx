import React from "react";

import styles from './Card.module.css'
import ButtonObject from "../buttonObject/ButtonObject";

import img_static from '../../img/book.jpg'

function Card ({title, author, genre, price, year, img, bookId}) {
    return(
        <div className={styles.card}>
            <img className={styles.card__img} src={img_static} alt={styles.card__title} height="300" width="300"/>
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <div className={styles.card__title}>
                        {title}
                    </div>
                    <div className={styles.card__strength}>
                        Author: {author}
                    </div>
                    <div className={styles.card__strength}>
                        Year: {year}
                    </div>
                    <div className={styles.card__desc}>
                        {genre}
                    </div>
                    <div className={styles.card__button}>
                        <ButtonObject bookId={bookId}/>
                    </div>
                </div>
                <div className={styles.card__price}>
                    {price} $
                </div>

            </div>
        </div>
    );
}

export default Card;