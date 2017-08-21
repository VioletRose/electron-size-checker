'use strict';

//Importing Electron.
const electron = require('electron');

//Storing user data in the app folder to ensure the app can be uninstalled without junk left behind.
electron.app.setPath('userData', __dirname + '/../userdata');

//Assigning the variable that will contain the browser window once the app is ready.
var mainWindow;

electron.app.on('ready', function() {
    //Creating the browser window.
	mainWindow = new electron.BrowserWindow({
        height: 800,
		resizable: false,
        width: 600
    });
	
	//Creating an event listener for the main window closing.
	mainWindow.on('closed', function() {
		//Dereferencing the browser window.
		mainWindow = null;
		
		//Shutting down the Node process.
		process.exit(0);
	});
	
	//Loading the app's main page.
	mainWindow.loadURL('file://' + __dirname + '/../pages/sizechecker.html');
});
