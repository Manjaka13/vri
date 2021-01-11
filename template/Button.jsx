/*
	Standart button component
	disabled (or disable) property is set to prevent any events from reaching the
	button, this may come in handy when waiting for a request before being able to click
	the button again (or else the request will be sent more than once every time button is clicked)
	Texts inside buttons are responsive by default
*/

<Button
	style={{
		color: "black",
		background: "orange"
	}}
	onClick={() => console.log("CLICKED!!!!!")}
>
	Click me
</Button>

<Button disabled>
	Disabled button
</Button>