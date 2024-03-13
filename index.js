const { app, BrowserWindow } = require('electron')
const Config = require('electron-config')
const path = require('path')
const settings = require('electron-settings');

const config = new Config()
let win

const NAVIDROME_URL = "https://music.brandonthe.gay"
const createWindow = () => {
  const win = new BrowserWindow({
    icon: "./images/navidrome.svg"
  })

  win.setBounds(store.get('bounds'))

  win.on('close', () => {
      store.set('bounds', win.getBounds())
  })

  win.setMenuBarVisibility(false)
  win.loadURL(NAVIDROME_URL)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})