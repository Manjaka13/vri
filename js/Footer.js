import React from "react";
import VR from "./VR";
import "../css/Footer.css";
import Row from "./Row";
import Col from "./Col";
import Text from "./Text";

class Footer extends VR {
	constructor(props) {
		super(props);
		this.append("vr-footer");
		this.style.backgroundSize = "cover";
	}

	render() {
		const year = new Date().getFullYear();
		const text_style = this.style.color ? {
			color: this.style.color
		} : {};
		this.style.color = "";

		return (
			<Row className={this.className} style={this.style} xlg="auto">
				<Col className="left" xlg="4" xsm="auto">
					<Text style={text_style}>All rights reserved</Text>
				</Col>
				<Col className="center" xlg="2" xsm="auto" style={text_style}>
					{this.props.children}
				</Col>
				<Col className="right" xlg="4" xsm="auto">
					<Text style={text_style}>Copyright © {year} - {year + 1}</Text>
				</Col>
			</Row>
		);
	}
}

export default Footer;