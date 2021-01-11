import React from "react";
import VR from "./VR";
import "../css/Textblock.css";
import Title from "./Title";
import Separator from "./Separator";
import Text from "./Text";

class Textblock extends VR {
	constructor(props) {
		super(props);
		this.append("vr-textblock");
	}

	render() {
		if(this.props.children) {
			const title = this.props.title || "Some title here";
			const minititle = this.props.minititle || null;
			const minititle_style = {
				display: minititle ? "block" : "none",
				color: this.style.theme || ""
			};
			const separator_style = {
				display: minititle ? "block" : "none",
				background: this.style.theme || ""
			};
			this.style.theme = "";
			const title_style = {
				color: this.style.color_title || ""
			};
			this.style.color_title = "";
			const text_style = {
				color: this.style.color || ""
			};
			this.style.color = "";

			return (
				<div className={this.className} style={this.style}>
					<Title sm style={minititle_style}>{minititle}</Title>
					<Separator style={separator_style}/>
					<Title style={title_style} xlg>{title}</Title>
					<Text style={text_style}>{this.props.children}</Text>
				</div>
			);
		}
		return null;
	}
}

export default Textblock;