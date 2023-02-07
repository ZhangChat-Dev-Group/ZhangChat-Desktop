const { create } = require('domain')
const {app,BrowserWindow} = require('electron')
const path = require('path')

function createWindow(){
    const win = new BrowserWindow({})
    win.maximize()
    win.loadFile(path.join(__dirname,'ui','index.html'))
}

app.on('window-all-closed',() => {    //Windows & Linux
    if (process.platform !== 'darwin'){
        app.quit()
    }
})

app.whenReady().then(() => {
    createWindow()

    app.on('activate',() => {    //MacOS
        if (BrowserWindow.getAllWindows.length === 0){
            createWindow()
        }
    })
})