import React from "react";

const Footer = () => {

    let height = {
        height: "70px"
    }

  return (
            <footer className="navbar navbar-dark bg-dark p-0" style={height}>
				<div className="container-fluid justify-content-center">
					<a className="navbar-brand" href="#">Copyright © Your Website 2024</a>
				</div>
			</footer>
  );
}

export default Footer;