import React, {Component} from "react";

class VR extends Component {
	constructor(props) {
		super();
		//Copy classNames and style from props
		this.className = props.className || "";
		this.style = props.style || {};
		//Set component sizes
		this.sizes = {
			xlg: props.xlg && typeof(props.xlg) == "string" ? props.xlg : false,
			lg: props.lg && typeof(props.lg) == "string" ? props.lg : false,
			md: props.md && typeof(props.md) == "string" ? props.md : false,
			sm: props.sm && typeof(props.sm) == "string" ? props.sm : false,
			xsm: props.xsm && typeof(props.xsm) == "string" ? props.xsm : false
		};
		this.size = props.xlg ? "xlg" : (props.lg ? "lg" : (props.md ? "md" : (props.sm ? "sm" : "xsm")));
		//Event callbacks
		this.onClick = typeof(props.onClick) == "function" ? props.onClick : this.default_onClick;
	}

	default_onClick() {
		console.log("You clicked a VR component");
	}

	//Appends new class name
	append(new_class) {
		if(typeof(new_class) == "string" && new_class.length > 0)
			this.className += this.className.length == 0 ? new_class : " " + new_class;
	}

	//Removes class name in classname list
	remove(search) {
		if(this.className.length > 0) {
			let new_classname = "";
			this.className.split(" ").forEach(c => new_classname += c != search ? (new_classname.length == 0 ? c : " " + c) : "");
			this.className = new_classname;
		}
	}
}

export default VR;