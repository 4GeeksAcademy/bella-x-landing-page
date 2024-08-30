import React from "react";
import Navbar from "./navbar.jsx";
import Cards from "./cards.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";





//create your first component
const Home = () => {
	return (
		
		<div >
			<Navbar />
			<Jumbotron title="A Warm Welcome!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
				<div className="container-fluid py-3 mx-4">
					<div className="row">
						<div className="col-md-3">
							<Cards imgUrl="" title="It Was All A Dream" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
						</div>
						<div className="col-md-3">
							<Cards imgUrl="" title="Where to Next?" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
						</div>
						<div className="col-md-3">
							<Cards imgUrl="" title="Go Green!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
						</div>
						<div className="col-md-3">
							<Cards imgUrl="" title="Meet Me at the Disco" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
						</div>
					</div>
				</div>
			<Footer />
		</div>
	);
};

export default Home;
