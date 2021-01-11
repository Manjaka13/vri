import React from "react";
import VR from "./VR";
import "../css/Quad.css";

class Quad extends VR {
	constructor(props) {
		super(props);
		this.append("vr-quad");
	}

	render() {
		const children = this.props.children || [];
		const child = [
			children && children[0] ? children[0] : "",
			children && children[1] ? children[1] : "",
			children && children[2] ? children[2] : "",
			children && children[3] ? children[3] : ""
		];

		return (
			<div className={this.className} style={this.style}>
				<div className="item item0 little left">
					{child[0]}
				</div>
				<div className="item item1 big right">
					{child[1]}
				</div>
				<div className="item item2 big left">
					{child[2]}
				</div>
				<div className="item item3 little right">
					{child[3]}
				</div>
			</div>
		);
	}
}

export default Quad;