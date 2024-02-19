let handler  = async (m, { conn, usedPrefix, command }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let picture = './media/menus/MaxerBot-MD.jpg'
let gata = `𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝘾𝙄𝙊𝙉 𝘿𝙀 𝙈𝘼𝙓𝙀𝙍𝘽𝙊𝙏-𝙈𝘿

*━━━━━━━━━━━━━⬣*
✅ 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙀𝙉 𝙏𝙀𝙍𝙈𝙐𝙓
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
termux-setup-storage
apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/MaxViajeYT/MaxerBot-MD/master/maxer.sh | bash
*━━━━━━━━━━━━━⬣*
✅ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙏𝙀𝙍𝙈𝙐𝙓
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
https://github.com/termux/termux-app/releases/tag/v0.118.0
*━━━━━━━━━━━━━⬣*
✅ 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙀𝙉 𝙃𝙀𝙍𝙊𝙆𝙐
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*_https://heroku.com/deploy?template=https://github.com/MaxViajeYT/MaxerBot-MD_*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*Añada lo siguente al Buildpack:*
_https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git_
_https://github.com/clhuang/heroku-buildpack-webp-binaries.git_
*━━━━━━━━━━━━━⬣*`
await conn.sendFile(m.chat, picture, 'gata.mp4', gata, fkontak)}
/*conn.sendButton(m.chat, gata, `Comunícate con Mí Creadora si necesitas ayuda con la Instalación.\n\nContact My Creator if you need help with the Installation.\n\n${ig}\n${wm}`, picture, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar']], fkontak, m)}*/
handler.command = /^(instalarbot|instalarmaxerbot|instalarmaxer|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
handler.owner = false
export default handler
