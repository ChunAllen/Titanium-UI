//create a window
var win = Titanium.UI.createWindow({
	title: "Our window titile",
	backgroundColor: "#FFFFFF",
	exitOnClose: true // For Android, have the app close on the exiting of the windows
});

//create a view
var view1 = Titanium.UI.createView({
	height: 50, //height in pixels
	width: "100%",// width in 100% measurements
	top: 0, //Distance from top of screen
	left: 0,// Distance from the left of screen
	backgroundColor: "purple"
});

//creating a label
var label1 = Titanium.UI.createLabel({
	text: "Label 01",
	top: 10,
	left: 0,
	height: 50,
	width: "100%",
	textAlign: "center",
	color: "#000000",
	font: {fontSize: 36, fontstyle: "italic"},
	backgroundColor: "#363F45"
});


//creating a an image view from local
var imageView1 = Titanium.UI.createImageView({
	image: "images/iron_man.jpeg", // from the created images folder under resources
	height: 185,
	width: 150,
	top: 100
});

win.add(view1); // adding the view1 variable to the window
win.add(label1); // adding the label to the window
win.add(imageView1); // adding the imageView to the window
win.open(); // opening the window
