import React from "react";
import VR from "./VR";
import "../css/Row.css";

class Row extends VR {
	constructor(props) {
		super(props);
		this.append("vr-row");
		if(this.sizes.xlg)
			this.append("vr-row-xlg-" + this.sizes.xlg);
		if(this.sizes.lg)
			this.append("vr-row-lg-" + this.sizes.lg);
		if(this.sizes.md)
			this.append("vr-row-md-" + this.sizes.md);
		if(this.sizes.sm)
			this.append("vr-row-sm-" + this.sizes.sm);
		if(this.sizes.xsm)
			this.append("vr-row-xsm-" + this.sizes.xsm);
	}

	render() {
		return (
			<div className={this.className} style={this.style}>{this.props.children}</div>
		);
		return null;
	}
}

export default Row;