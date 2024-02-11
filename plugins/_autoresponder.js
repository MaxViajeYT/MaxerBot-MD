import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(sticker, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝗠𝗮𝘅𝗲𝗿𝗕𝗼𝘁-𝗠𝗗', body: 'ඩා爪Δメモメモ⃟⃢🇲🇽⏤͟͟͞͞✰', sourceUrl: `https://github.com/MaxViajeYT/MaxerBot-MD`, thumbnail: sticker}}})}
    
return !0 }
export default handler
