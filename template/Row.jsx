/*
	Used to separate document height as rows with certain sizes
	This is used to separate screen with blocks that are responsive
*/

<Row>
	A row of width and height to 100%.
</Row>

<Row xlg="5">
	A row of 100% width and 50% height at very big screen size
</Row>

<Row xlg="5" md="7">
	A row of 100% width and 50% height at very big screen size, 70% at medium screen size
</Row>

<Row xlg="5" md="7" sm="0">
	A row of 100% width and 50% height at very big screen size, 70% at medium screen size.
	At small screen size, block disapears
</Row>

<Row xlg="5" lg="10" md="7" sm="0" xsm="auto">
	A row of 100% width and 50% height a very big screen size, expands to full height size at
	large screen resolution, 70% at medium resolution, disapears at small screen size and
	at very small screen resolution have automatic height depending on inner content of the box;
</Row>