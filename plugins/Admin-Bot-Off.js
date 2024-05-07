/*let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply(`${eg}𝙀𝙎𝙏𝙀 𝘾𝙃𝘼𝙏 𝙁𝙐𝙀 𝘿𝙀𝙎𝘽𝘼𝙉𝙀𝘼𝘿𝙊 🥳\n𝘼𝙃𝙊𝙍𝘼 𝙎𝙄 𝙀𝙎𝙏𝙊𝙔 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀.\n\n𝙏𝙃𝙄𝙎 𝘾𝙃𝘼𝙏 𝙒𝘼𝙎 𝙐𝙉𝘽𝘼𝙉 😌\n𝙉𝙊𝙒 𝙄 𝘼𝙈 𝘼𝙑𝘼𝙄𝙇𝘼𝘽𝙇𝙀.`)
}
handler.help = ['unbanchat2']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true
handler.exp = 50

export default handler*/

//PARA GRUPOS

let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`${eg}𝙎𝙀 𝘼𝙋𝘼𝙂𝙊 𝙀𝙇 𝘽𝙊𝙏 𝙀𝙉 𝙀𝙎𝙏𝙀 𝘾𝙃𝘼𝙏 🤑\n𝙋𝘼𝙍𝘼 𝙋𝙍𝙀𝙉𝘿𝙀𝙍𝙇𝙊 𝙋𝙊𝙉𝙀𝙍 /𝘽𝙊𝙏-𝙊𝙉.\n\n𝘽𝙊𝙏 𝙄𝙎 𝘽𝘼𝙉𝙉𝙀𝘿 𝙄𝙉 𝙏𝙃𝙄𝙎 𝘾𝙃𝘼𝙏 👻\n𝙏𝙊 𝙏𝙐𝙍𝙉 𝙄𝙏 𝙊𝙉 𝙎𝙀𝙏 /𝘽𝙊𝙏-𝙊𝙉`)
}
handler.help = ['bot-off/on']
handler.tags = ['admin']
handler.command = /^bot-off|maxer-off|boff|moff$/i
handler.botAdmin = false
handler.admin = true
hanler.rowmer = false
export default handler
