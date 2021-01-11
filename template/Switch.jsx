/*
	A component that has two states (enabled or disabled)
	if status is set to true, switch will enable, else it'll disable
	Just bind a onClick event that updates some state to true/false and give that
	state to the status property, it'll enable/disable the switch each click
*/

<Switch style={{theme: "rgb(255, 0, 55)"}} status={this.state.status} onClick={this.handle_click} />

<Switch enable={true} onClick={this.change_status} />

<Switch enabled={false} onClick={this.update_somestate} />
