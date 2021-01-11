import React from "react";
import VR from "./VR";
import "../css/Title.css";

class Title extends VR {
	constructor(props) {
		super(props);
		this.append("vr-title");
		this.append("vr-title-" + this.size);
	}

	render() {
		if(this.props.children) {
			switch(this.size) {
				case "xlg":
					return <h1 className={this.className} style={this.style}>{this.props.children}</h1>;
					break;
				case "lg":
					return <h2 className={this.className} style={this.style}>{this.props.children}</h2>;
					break;
				case "md":
					return <h3 className={this.className} style={this.style}>{this.props.children}</h3>;
					break;
				case "sm":
					return <h4 className={this.className} style={this.style}>{this.props.children}</h4>;
					break;
				case "xsm":
					return <h5 className={this.className} style={this.style}>{this.props.children}</h5>;
					break;
			}
		}
		return null;
	}
}

export default Title;