import fs from "fs"
let handler = m => m

handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
if (chat.isBanned) return
let vn = './media/bot.mp3'
let bot = `${pickRandom([`*𝐉𝐚𝐣𝐚 𝐚𝐪𝐮𝐢 𝐞𝐬𝐭𝐨𝐲 𝐜𝐚𝐫𝐢ñ𝐨 𝐧𝐮𝐧𝐜𝐚 𝐦𝐞 𝐞𝐡 𝐢𝐝𝐨😪*`, `𝐀𝐪𝐮𝐢 𝐞𝐬𝐭𝐨𝐲 𝐜𝐚𝐫𝐢ñ𝐨 𝐪𝐮𝐞 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐚𝐬? 𝐨 𝐭𝐚𝐥 𝐯𝐞𝐳 𝐪𝐮𝐢𝐞𝐫𝐚𝐬 𝐡𝐚𝐜𝐞𝐫 𝐮𝐧 ŦŘΔŦØ 😈???`, `*𝐇𝐨... 𝐋𝐚, 𝐏𝐮𝐞𝐝𝐨 𝐡𝐚𝐛𝐥𝐚𝐫 𝐚𝐡𝐨𝐫𝐚?🧐*`])}
`.trim()
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5218712189448-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Goku le gana a Kratos 😈 (no leo lloros)', orderTitle: 'Bang', thumbnail: fs.readFileSync('./media/menus/Menu3.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}}  

if (/^bot|maxer|maxerbot|maxerbot-md|alastor$/i.test(m.text)) {
    
conn.sendPresenceUpdate('recording', m.chat)    
await conn.sendMessage(m.chat, {text: bot, mentions: [m.sender]}, {quoted: fkontak})
//conn.sendButton(m.chat, `𝐉𝐚𝐣𝐚 𝐚𝐪𝐮𝐢 𝐞𝐬𝐭𝐨𝐲 𝐜𝐚𝐫𝐢ñ𝐨 𝐧𝐮𝐧𝐜𝐚 𝐦𝐞 𝐞𝐡 𝐢𝐝𝐨😪`, wm, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `#menu`]], 'conversation', { sendEphemeral: true, quoted: estilo })
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: estiloaudio })   
}
return !0
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}