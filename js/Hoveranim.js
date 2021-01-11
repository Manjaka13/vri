import React from "react";
import VR from "./VR";
import "../css/Hoveranim.css";

class Hoveranim extends VR {
	constructor(props) {
		super(props);
		this.append("vr-hoveranim");
	}
	render() {
		return (
			<div className={this.className} style={this.style}>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Hoveranim;