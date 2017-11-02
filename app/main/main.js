'use strict'

const electron = require('electron')

const app = electron.app // this is our app
const BrowserWindow = electron.BrowserWindow // This is a Module that creates windows

const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')

let mainWindow = null

const createWindow = async () => {
  if (process.env.NODE_ENV === 'development') {
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
  }

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768
  })

  //const settings = require('electron-settings')

  // display the index.html file
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  // open dev tools by default so we can see any console errors
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

/** event listeners **/

app.on('ready', createWindow)

/* Mac Specific things */

// when you close all the windows on a non-mac OS it quits the app
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { app.quit() }
})

// if there is no mainWindow it creates one (like when you click the dock icon)
app.on('activate', () => {
  if (mainWindow === null) { createWindow() }
})