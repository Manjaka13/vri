import React from "react";
import VR from "./VR";
import Row from "./Row";
import Col from "./Col";

class Document extends VR {
	constructor(props) {
		super(props);
		this.append("vr-document");
	}

	render() {
		return (
			<Row className={this.className} style={this.style} xlg="auto">
                <Col xlg="8" sm="9">{this.props.children}</Col>
            </Row>
		);
	}
}

export default Document;