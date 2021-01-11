import React from "react";
import VR from "./VR";
import "../css/Badge.css";

class Badge extends VR {
	constructor(props) {
		super(props);
		this.append("vr-badge");
	}

	render() {
		const dot_settings = {
			xlg: [200, -56],
			lg: [160, -45],
			md: [100, -32],
			sm: [60, -24],
			xsm: [40, -14]
		};
		let n = parseInt(this.props.number || 0);
		let n_text = n > 0 ? n : undefined;
		n_text = n_text ? (n_text >= 100 ? "+99" : n_text) : undefined;
		const setting = this.size;
		const dot_style = {
			display: n_text ? "block" : "none",
			"top": dot_settings[setting][1]
		};
		this.style.width = dot_settings[setting][0];
		this.style.height = dot_settings[setting][0];
		this.style.background = this.props.image ? "url(" + this.props.image + ")" : "white";
		this.style.backgroundSize = "cover";

		if(this.props.children)
			return (
				<div className={this.className} style={this.style}>
					<div className="inner-box">
						<div className={this.props.className ? this.props.className : ""} style={this.props.style ? this.props.style : {}}>
							{this.props.children}
						</div>
					</div>
					<div className="dot" style={dot_style}>
						<p className="number">{n_text}</p>
					</div>
				</div>
			);
		return null;
	}
}

export default Badge;