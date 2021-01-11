import React from "react";
import VR from "./VR";
import "../css/Diapo.css";

class Diapo extends VR {
	constructor(props) {
		super(props);
		this.append("vr-diapo");
		this.state = {
            current_frame: 0
        };
        this.update_frame = this.update_frame.bind(this);
	}

	componentDidMount() {
		if(typeof(this.props.current_frame) == "function")
            this.props.current_frame(this.state.current_frame);
		setInterval(() => {
            this.update_frame();
        }, this.props.delay || 1000);
	}

	update_frame() {
        this.setState(prevState => {
            const current = prevState.current_frame + 1 < this.props.children.length ? (prevState.current_frame + 1) : 0;
            if(typeof(this.props.current_frame) == "function")
                this.props.current_frame(current);
            return {
                current_frame: current
            };
        });
    }

	render() {
		let n = 0;
        const mapped_items = this.props.children.map((i, key) => {
            const style = {
                position: "relative",
                top: (-100 * n) + "%",
                opacity: this.state.current_frame == n ? "1" : "0",
                pointerEvents: this.state.current_frame == n ? "auto" : "none"
            };
            n ++;
            return (
                <div key={key} className="item" style={style}>
                    {i}
                </div>
            );
        });

        return (
            <div className={this.className}>
                {mapped_items}
            </div>
        );
	}
}

export default Diapo;