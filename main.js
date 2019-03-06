const { app, BrowserWindow } = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600, toolbar: false,  icon: __dirname + '/images/favicon.png', })
  win.loadFile('index.html')
  win.webContents.openDevTools()
  win.setMenuBarVisibility(false)
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

