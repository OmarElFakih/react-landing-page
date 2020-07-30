import React from "react";
import Footer from "./footer/footer";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

import { CardGroup } from "./omarCardGroup";
import NavBar from "./NavBar";

//create your first component
export function Home() {
	return (
		<React.Fragment>
			<NavBar />
			<div className="container-fluid">
				<div className="row d-flex justify-content-center">
					<div className="col-10">
						<CardGroup />
					</div>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
}

{
	/* <div className="container-fluid">
		<React.Fragment>
			<div className="row d-flex justify-content-center">
				<div className="col-10">
					<CardGroup />
				</div>
			</div>
		</React.Fragment>  */
}
