let handler = async (m, { conn, text }) => {
   if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊`
     try {
		await conn.updateProfileStatus(text).catch(_ => _)
		conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}𝘽𝙄𝙊 𝘿𝙀𝙇 𝙈𝘼𝙓𝙀𝙍𝘽𝙊𝙏 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝘼 𝘾𝙊𝙉 𝙀𝙓𝙄𝙏𝙊 ✅️`, m)
} catch {
       throw 'Well, Error Sis...'
     }
}
handler.help = ['setbotbio <teks>']
handler.tags = ['owner']
handler.command = /^setbiobot|setbotbio|setbiomaxer$/i
handler.owner = true

export default handler
