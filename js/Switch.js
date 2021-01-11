import React from "react";
import VR from "./VR";
import "../css/Switch.css";

class Switch extends VR {
	constructor(props) {
		super(props);
		this.append("vr-switch");
		this.append("vr-link");
	}

	render() {
		const enabled = this.props.enabled || this.props.enable || this.props.status ? true : false;
		let circle_style = {};
		this.remove("vr-switch-enabled");
		this.remove("vr-switch-disabled");
		if(enabled) {
			this.append("vr-switch-enabled");
			circle_style = {
				background: this.style.theme ? this.style.theme : ""
			};
		}
		else
			this.append("vr-switch-disabled");

		return (
			<a href="#0" className={this.className} onClick={this.onClick} style={this.style}>
				<div className="circle" style={circle_style}></div>
			</a>
		);
	}
}

export default Switch;