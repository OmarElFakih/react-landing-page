import React from "react";
// import Container from "react-bootstrap/Container";

class Footer extends React.Component {
	render() {
		return (
			<div className="container mt-3">
				<p className="float-right">
					<a className="btn btn-primary rounded-circle" href="/#">
						Subir
					</a>
				</p>
				<p>
					&copy; {new Date().getFullYear()} Landing-Page Inc. &middot;{" "}
					<a href="/#">Politicas de Privacidad</a> &middot;{" "}
					<a href="/#">Terminos</a>
				</p>
			</div>
		);
	}
}

export default Footer;
