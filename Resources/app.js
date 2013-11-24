//create a window
var win = Titanium.UI.createWindow({
	title: "Our window titile",
	backgroundColor: "#FFFFFF",
	exitOnClose: true // For Android, have the app close on the exiting of the windows
});


var win2 = Titanium.UI.createWindow({
	title: "Our window titile",
	backgroundColor: "#FFFFFF",
	exitOnClose: true, // For Android, have the app close on the exiting of the windows
	url: "win2.js"
});


// getting the OS name (iPhone, iPad, android, mobileweb)
var PLATFORM = Titanium.Platform.osname;


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
	backgroundColor: "#FFFFFF"
});


//creating a an image view from local
var imageView1 = Titanium.UI.createImageView({
	image: "images/iron_man.jpeg", // from the created images folder under resources
	height: 185,
	width: 150,
	top: 100
});


//Adding an event when image was clicked
imageView1.addEventListener("click", function(e){
	var toast = Titanium.UI.createNotification({
		duration: 2000,
		message: "I am Iron Man!"
	});
	toast.show();
});

// creating a native button
var button1 = Titanium.UI.createButton({
	title: "What OS is this?",
	width: "25%",
	height: "10%",
	top: 300,
	id: "Simple Button"
});

// creating a click event that fires an alert dialog
button1.addEventListener("click", function(e){
	//alert(e.source.id + " fired a " + e.type + " event");
	alert(PLATFORM);
});

//creating a slider
var slider1 = Titanium.UI.createSlider({
	height: "auto",
	width: 300,
	top: 450,
	min: 0, // setting the min value for the slider (needed for Android)
	max: 100 // setting the max value for the slider (needed for Android)
});


//creating a slider
var switch1 = Titanium.UI.createSwitch({
	top: 500,
	value: true // set the initial value of the switch, true or false	
});

//creating a switch
switch1.addEventListener("change", function(e){
	label1.text = e.value;
});


//Displays the value to the label 
slider1.addEventListener("change", function(e){
	label1.text = Math.round(e.value);
});


win.add(view1); // adding the view1 variable to the window
win.add(label1); // adding the label to the window
win.add(imageView1); // adding the imageView to the window
win.add(button1); // adding the button to the window
win.add(slider1); // adding the slider to the window
win.add(switch1); // adding the switch to the window
win.open(); // opening the window
