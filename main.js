const {app, BrowserWindow} = require('electron')

function crearVentana(){
    const ventana = new BrowserWindow({
        width: 375,
        height: 500,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    });
    ventana.loadFile('index.html')
}
app.whenReady().then(crearVentana)