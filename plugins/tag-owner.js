//Codigo creado por Sin Nombre (https://github.com/SinNombre999)
let handler = async (m, { conn, usedPrefix, isOwner }) => {
    let user = global.db.data.users[m.sender]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `Jaja @${m.sender.split`@`[0]} cariño si necesitas algo de mi owner escribele al privado o espera que conteste si no ps chingaste Jajaja *-Solo asuntos importantes-*`
let buttonMessage= {
'document': { url: "https://github.com/SinNombre999" },
'mimetype': `application/${document}`,
'fileName': `Pornhub Premium 🥵`,
'fileLength': 999111111111,
'pageCount': 999,
'contextInfo': {
'mentionedJid': [m.sender],
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'http://wa.me/5218712189448',
'mediaType': 2,
'previewType': 'pdf',
'title': wm,
'body': `Que miras te gusto o que🤨`,
'thumbnail': gatofacha,
'sourceUrl': 'https://wa.me/5218712189448' }},
'caption': texto1,
'footer': `\n${global.saludo}`,
'buttons': null,
'headerType': 6 }
await conn.sendMessage(m.chat, { react: { text: '👋', key: m.key } })
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.customPrefix = /@5218712189448/i
handler.command = new RegExp
export default handler
