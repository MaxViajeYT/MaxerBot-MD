let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw ' *No es necesario ya eres admin* '
  if (isAdmin) throw `*𝙔𝘼 𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙈𝙄 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊*`
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^admin.|atad|autoadmin|tenerpoder|sientoelpoder|elpodercorreastaenmishuevos$/i
handler.rowner = true
handler.botAdmin = true
export default handler
