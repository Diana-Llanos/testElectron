const { app, BrowserWindow } = require('electron')

const createWindow = () => {                      //funcion createWindows, define ancho y alto de la ventana
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')                     //indicamos el archivo html que se va a cargar ya sea proceso de renderizado o pagina web
}

app.whenReady().then(() => {                    //iniciamos o cargarmos ventana cuando todo este listo
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length ===0){  
      createWindow ()
  }
})
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
