/*let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply(`${eg}𝙎𝙀 𝙋𝙍𝙀𝙉𝘿𝙄𝙊 𝙀𝙇 𝘽𝙊𝙏 𝙀𝙉 𝙀𝙎𝙏𝙀 𝘾𝙃𝘼𝙏 🥳\n𝘼𝙃𝙊𝙍𝘼 𝙎𝙄 𝙀𝙎𝙏𝙊𝙔 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀.\n\n𝙏𝙃𝙀 𝘽𝙊𝙏 𝙒𝘼𝙎 𝙏𝙐𝙍𝙉𝙀𝘿 𝙊𝙉 𝙄𝙉 𝙏𝙃𝙄𝙎 𝘾𝙃𝘼𝙏 😌\n𝙉𝙊𝙒 𝙄 𝘼𝙈 𝘼𝙑𝘼𝙄𝙇𝘼𝘽𝙇𝙀.`)
}
handler.help = ['bot-off/on']
handler.tags = ['admin']
handler.command = /^bot-on$/i
handler.rowner = false
handler.admin = true
handler.exp = 50

export default handler*/

//PARA GRUPOS

let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`${eg}𝙎𝙀 𝘼𝙋𝘼𝙂𝙊 𝙀𝙇 𝘽𝙊𝙏 𝙀𝙉 𝙀𝙎𝙏𝙀 𝘾𝙃𝘼𝙏 🤑\n𝙋𝘼𝙍𝘼 𝙋𝙍𝙀𝙉𝘿𝙀𝙍𝙇𝙊 𝙋𝙊𝙉𝙀𝙍 /𝘽𝙊𝙏-𝙊𝙉.\n\n𝘽𝙊𝙏 𝙄𝙎 𝘽𝘼𝙉𝙉𝙀𝘿 𝙄𝙉 𝙏𝙃𝙄𝙎 𝘾𝙃𝘼𝙏 👻\n𝙏𝙊 𝙏𝙐𝙍𝙉 𝙄𝙏 𝙊𝙉 𝙎𝙀𝙏 /𝘽𝙊𝙏-𝙊𝙉`)
}
handler.help = ['bot-off/on']
handler.tags = ['admin']
handler.command = /^bot-off$/i
handler.botAdmin = false
handler.admin = true
handler.rowmer = false
export default handler
