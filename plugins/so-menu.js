import util from 'util'
import path from 'path'
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 100 
global.db.data.users[m.sender].exp += 100
  
let vn = './media/menu.mp3'
conn.sendFile(m.chat, vn, 'el poder corre asta en mis huevos.mp3', null, m, true, { 
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /audioefectomenu|buscarmenu|hornymenu|listaporno|listhorny|convertidormenu|descargasmenu|juegosmenu|grupomenu|herramientasmenu|infomenu|makermenu|menulogos2|ownermenu|randommenu|rpgmenu|stickermenu|menu18|menugrupo|menu3|musica|menú3|memu3|menumusica|menumusicas|memumusicas|memumusica|musicas|música|menucompleto|allmenu|menu|menú|memu|memú|help|menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio/
handler.command = /^(audioefectomenu|buscarmenu|hornymenu|listaporno|listhorny|convertidormenu|descargasmenu|juegosmenu|grupomenu|herramientasmenu|infomenu|makermenu|menulogos2|ownermenu|randommenu|rpgmenu|stickermenu|menu18|menugrupo|menu3|musica|menú3|memu3|menumusica|menumusicas|memumusicas|memumusica|musicas|música|menucompleto|allmenu|menu|menú|memu|memú|help|menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio$)/
export default handler
