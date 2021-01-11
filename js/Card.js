import React from "react";
import {Link} from "react-router-dom";
import VR from "./VR";
import "../css/Card.css";
import Hoveranim from "./Hoveranim";
import Text from "./Text";
import Title from "./Title";

class Card extends VR {
	constructor(props) {
		super(props);
		this.type = props.type ? props.type : 0;
		this.append("vr-card");
		this.append("vr-card-" + this.type);
		this.append("vr-link");
	}

	render() {
		console.log(this.type);
		if(this.type == 0)
			return (
				<div className={this.className} style={this.style}>
					<Link className="representation" to="#0">
						<Hoveranim>
							<div style={{background: "url("+this.props.image+")", backgroundSize: "cover"}}>
								<div className="hover">
									{this.props.children[0]}
								</div>
							</div>
						</Hoveranim>
					</Link>
					<Title className="title">{this.props.title}</Title>
					<Title className="minititle">{this.props.minititle}</Title>
					<Text className="text">{this.props.children[1]}</Text>
				</div>
			);
		else
			return (
				<div className={this.className} style={this.style}>
					<Link className="representation" to="#0">
						<Hoveranim>
							<div style={{background: "url("+this.props.image+")", backgroundSize: "cover"}}>
								<div className="hover">
									{this.props.children[0]}
								</div>
							</div>
						</Hoveranim>
					</Link>
					<div className="body">
						<Title className="title">{this.props.title}</Title>
						<Title className="minititle">{this.props.minititle}</Title>
					</div>
				</div>
			);
	}
}

export default Card;