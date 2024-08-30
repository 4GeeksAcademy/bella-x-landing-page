import React from "react";
import PropTypes from 'prop-types';



const Cards = (props) => {



  return (
    <div className="card" style={{width: '18rem'}}>
      <img src="{props.imgURl}" className="card-img-top" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">Find out more!</a>
      </div>
    </div>
  );
}

Cards.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgURL: PropTypes.string, 
};


export default Cards;