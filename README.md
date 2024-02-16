### 🟢 (OPCIÓN 1) INSTALACIÓN AUTOMÁTICA 
[![blog](https://img.shields.io/badge/Termux-MaxerBotMD-FFC0CB?style=for-the-badge&logo=twitch&logoColor=white)](https://github.com/termux/termux-app/releases/tag/v0.118.0)
> **Nota** Comandos para instalar de forma automática en Termux  
```bash
termux-setup-storage
```
```bash
apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/MaxViajeYT/MaxerBot-MD/master/maxer.sh | bash
```
```js
// PERSONALIZAR INSTALACIÓN AUTOMÁTICA (En caso de una Bifurcación)
// Parámetros editables

// REFERENCIA
"wget -O - https://raw.githubusercontent.com/MaxViajeYT/MaxerBot-MD/master/maxer.sh | bash"

// PARÁMETROS QUE PUEDE SER MODIFICADOS --> "[...]"
"wget -O - https://raw.githubusercontent.com/[usuario]/[repositorio]/[rama]/gata.sh | bash"
```
#### MODIFICAR ARCHIVO [`maxer.sh`](https://github.com/MaxViajeYT/MaxerBot-MD/blob/master/maxer.sh)
```js
//LÍNEAS A MODIFICAR
205 --> "git clone https://github.com/[user]/[repositorio].git"
//Ejemplo: git clone https://github.com/MaxViajeYT/MaxerBot-MD.git

209 --> "cd [repositorio]"
//Ejemplo: cd MaxerBot-MD 

//Una vez hecho estos cambios ejecute los nuevos comandos en Termux
```
-----
### 🔵 (OPCIÓN 2) INSTALACIÓN MANUAL POR TERMUX - GITHUB 
> **Note** Comandos para instalar de forma manual
```bash
termux-setup-storage
```
```bash
apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn
```
```bash
git clone https://github.com/MaxViajeYT/MaxerBot-MD && cd MaxerBot-MD
```
```bash
yarn install && npm install
```
```bash
npm start
```
> **Warning** Si aparece (Y/I/N/O/D/Z) [default=N] ? use la letra "y" + "ENTER" para continuar con la instalación 
------------------
### 📁 (OPCIÓN 3) INSTALACIÓN POR TERMUX - ARCHIVOS
> **Note** Descargué y Descomprime
### [`MaxerBot-MD ~ Archivos`](https://github.com/MaxViajeYT/MaxerBot-MD/archive/refs/heads/master.zip)
[![blog](https://img.shields.io/badge/Termux-MaxerBotMD-FFC0CB?style=for-the-badge&logo=twitch&logoColor=white)
](https://github.com/termux/termux-app/releases/tag/v0.118.0)
```bash
termux-setup-storage
```
```bash
apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn
```
```bash
cd storage/downloads/MaxerBot-MD-master/MaxerBot-MD-master 
```
```bash
yarn install
```
```bash
npm install
```
```bash
npm start
```
* #### APLICACIÓN RECOMENDADA PARA [`DESCOMPRIMIR`](https://play.google.com/store/apps/details?id=com.rarlab.rar)
* #### APLICACIÓN RECOMENDADA PARA EDITAR [`NÚMERO DE OWNER`](https://play.google.com/store/apps/details?id=com.rhmsoft.code)
> **Note** Guardar los archivos en la ubicación: storage/downloads/MaxerBot-MD-master/MaxerBot-MD-master   
----
### 🚀 USAR MAXERBOT 24/7 EN TERMUX 
> Ejecutar estos comandos dentro de la carpeta MaxerBot-MD
```bash
termux-wake-lock && npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs 
``` 
#### ⬇️ Opciones Disponibles
> **Warning** Esto eliminará todo el historial que hayas establecido con PM2:
```bash 
pm2 delete index
``` 
> Si tienes cerrado Termux y quiere ver de nuevo la ejecución use:
```bash 
pm2 logs 
``` 
> Si desea detener la ejecución de Termux use:
```bash 
pm2 stop index
``` 
> Si desea iniciar de nuevo la ejecución de Termux use:
```bash 
pm2 start index
``` 
----
### 🤓 ACTUALIZAR MAXERBOT
> **Note** Comandos para actualizar MaxerBot-MD de forma automática
```bash
grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget && wget -O - https://raw.githubusercontent.com/MaxViajeYT/MaxerBot-MD/master/update.sh | bash 
```
#### Para que no pierda su progreso en MaxerBot, estos comandos realizarán un respaldo de su `database.json` y se agregará a la versión más reciente.
> **Warning** Estos comandos solo funcionan para TERMUX, REPLIT, LINUX                           
----
