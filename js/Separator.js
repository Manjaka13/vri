import React from "react";
import VR from "./VR";
import "../css/Separator.css";

class Separator extends VR {
	constructor(props) {
		super(props);
		this.append("vr-separator");
	}

	render() {
		if(this.style.theme)
			this.style.background = this.style.theme ? this.style.theme : (this.style.background ? this.style.background : "grey");
		
		return (
			<div className={this.className} style={this.style}></div>
		);
	}
}

export default Separator;