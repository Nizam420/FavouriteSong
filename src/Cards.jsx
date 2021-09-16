import React from 'react';

import Images from './Images';

function Card(props) {
    return (
        <div className="cards">
            <div className="card">
              <Images imgsrc={props.imgsrc}/>  
                <div className="card__info">
                    <span className="card__category"> {props.title} </span>
                    <h3 className="card__title"> {props.sanme} </h3>
                    <a href={props.link} >
                        <button> Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;