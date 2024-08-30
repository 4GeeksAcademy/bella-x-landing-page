import React from "react";
import PropTypes from 'prop-types';

const Jumbotron = (props) => { 

  return (
            <div className="m-5 rounded-3 bs-secondary-bg-rgb">
                <div className="container-fluid p-5">
                    <h1 className="display-1">{props.title}</h1>
                    <p className="col-md-12 fs-4">{props.description}</p>
                    <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
                </div>
            </div>
  );
}

Jumbotron.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}


export default Jumbotron;