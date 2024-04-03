//Codigo creado por ẉa.me/𝑺𝒊𝒏-𝑵𝒐𝒎𝒃𝒓𝒆
let handler = async (m, { conn, usedPrefix, isOwner }) => {
    let user = global.db.data.users[m.sender]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*-Solo asuntos importantes-*`
let buttonMessage= {
'document': { url: script },
'mimetype': `application/${document}`,
'fileName': `Hentai premium`,
'fileLength': 666111111111,
'pageCount': 666,
'contextInfo': {
'mentionedJid': [m.sender],
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'http://wa.me/528712189448',
'mediaType': 2,
'previewType': 'pdf',
'title': wm,
'body': `No se la jalen prros`,
'thumbnail': imagen1,
'sourceUrl': 'https://wa.me/528712189448' }},
'caption': texto1,
'footer': `\n${global.saludo}`,
'buttons': null,
'headerType': 6 }
await conn.sendMessage(m.chat, { react: { text: '👋', key: m.key } })
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.customPrefix = /@528712189448/i
handler.command = new RegExp
export default handler
