/*
	Used to separate document width as columns with certain sizes
	This is used to separate screen with blocks that are responsive
*/

<Col>
	A column of width and height to 100%.
</Col>

<Col xlg="5">
	A column of 100% height and 50% width at very big screen size
</Col>

<Col xlg="5" md="7">
	A column of 100% height and 50% width at very big screen size, 70% at medium screen size
</Col>

<Col xlg="5" md="7" sm="0">
	A column of 100% height and 50% width at very big screen size, 70% at medium screen size.
	At small screen size, block disapears
</Col>

<Col xlg="5" lg="10" md="7" sm="0" xsm="auto">
	A column of 100% height and 50% width a very big screen size, expands to full width size at
	large screen resolution, 70% at medium resolution, disapears at small screen size and
	at very small screen resolution have automatic width depending on inner content of the box;
</Col>