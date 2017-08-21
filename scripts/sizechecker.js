document.addEventListener("DOMContentLoaded", () => {
	//Attempting to require the Electron module.
	try {var electron = require('electron')}
	//If this fails, setting the electron variable to false.
	catch(error) {var electron = false}
	
	//Checking if the app is running in Electron.
	if(electron) {
		//Obtaining a reference to Electron's remote module.
		var remote = electron.remote;
		
		//Obtaining a reference to the current browser window.
		var mainWindow = remote.getCurrentWindow();
		
		//Obtaining size information from the browser window.
		var bounds = mainWindow.getBounds();
		var size = mainWindow.getSize();
		
		//Writing the size information to the page.	
		document.getElementById("boundsWidthSpan").innerHTML = bounds.width;
		document.getElementById("boundsHeightSpan").innerHTML = bounds.height;
		document.getElementById("sizeWidthSpan").innerHTML = size[0];
		document.getElementById("sizeHeightSpan").innerHTML = size[1];
	}
})
