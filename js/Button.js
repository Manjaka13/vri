import React from "react";
import VR from "./VR";
import "../css/Button.css";

class Button extends VR {
	constructor(props) {
		super(props);
		this.append("vr-button");
	}

	render() {
		const disabled = this.props.disabled || this.props.disable ? true : false;
		this.style.color = disabled ? "grey" : (this.style.color || "white");
		this.style.background = this.style.background ? this.style.background : "rgb(0, 162, 232)";
		this.style.pointerEvents = disabled ? "none" : "auto";

		if(this.props.children)
			return (
				<button className={this.className} style={this.style} onClick={() => {
					if(!disabled)
						this.onClick();
				}}>
					{this.props.children}
				</button>
			);
		return null;
	}
}

export default Button;