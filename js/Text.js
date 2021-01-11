import React from "react";
import VR from "./VR";
import "../css/Text.css";

class Text extends VR {
	constructor(props) {
		super(props);
		this.append("vr-text");
	}

	render() {
		if(this.props.children)
			return (
				<p className={this.className} style={this.style}>{this.props.children}</p>
			);
		return null;
	}
}

export default Text;