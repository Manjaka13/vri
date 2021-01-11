/*
	Plays a diaporama
	current_frame property is a function called each time the frame changes
	this function is given as parameter the current frame id
	You must put this component inside another div with specified size or
	give it a fixed size, else it'll fill the whole screen
*/

<Diapo delay="2300" current_frame={this.current_frame}>
	<Text>Diapo A</Text>
	<Text>Diapo B</Text>
	<Text>Diapo C</Text>
	<Text>Diapo D</Text>
</Diapo>