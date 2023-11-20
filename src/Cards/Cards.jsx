import React from 'react';

function Cards(props) {
  return (
    <div className="card position-relative">
      <img src={props.src} className="card-img-top" alt={props.alt} />
      <div className="card-body">
        <h2 className="card-title text-uppercase text-info fs-4 fw-bolder">
          {props.title}
        </h2>
        <h3 className="card-text fs-5 fw-bold">{props.desc}</h3>
      </div>
    </div>
  );
}

export default Cards;