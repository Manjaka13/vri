import React from "react";
import VR from "./VR";
import "../css/Col.css";

class Col extends VR {
	constructor(props) {
		super(props);
		this.append("vr-col");
		if(this.sizes.xlg)
			this.append("vr-col-xlg-" + this.sizes.xlg);
		if(this.sizes.lg)
			this.append("vr-col-lg-" + this.sizes.lg);
		if(this.sizes.md)
			this.append("vr-col-md-" + this.sizes.md);
		if(this.sizes.sm)
			this.append("vr-col-sm-" + this.sizes.sm);
		if(this.sizes.xsm)
			this.append("vr-col-xsm-" + this.sizes.xsm);
	}

	render() {
		return (
			<div className={this.className} style={this.style}>{this.props.children}</div>
		);
	}
}

export default Col;