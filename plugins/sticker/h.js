import { createSticker } from "../../system/utils.js";

const test = async (m, { conn, args }) => {
  if (!m.quoted) return m.reply("*يجب الرد على ملصق*");
  
  let [pack, author] = args.join(" ").split(" | ");
  
  if (!args.length) {
    return m.reply("📝 *الاستخدام الصحيح:*\n\n.حقوق اسم الباك | اسم المؤلف\n\n*مثال:*\n`.حقوق Mo ♡ JANAA`");
  }
  
  if (!pack) pack = "𝑱.𝑨.𝑵 𝑩𝑶𝑻";
  if (author === undefined) author = null;
  
  const q = await m.quoted;
  
  const buffer = await createSticker(await q.download(), { mime: q.mimetype, pack, author });

  await conn.sendMessage(
    m.chat,
    { sticker: buffer, contextInfo: context(m.sender, "https://ibb.co/sSK8chJ") },
    { quoted: global.reply_status }
  );
};

test.usage = ["حقوق نص | نص"];
test.command = ["حقوق"];
test.category = "sticker";
export default test;

const context = (jid, img) => ({
    mentionedJid: [jid],
    isForwarded: true,
    forwardingScore: 1,
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363401670228863@newsletter',
        newsletterName: '𝑭𝒍𝒂𝒔𝒉𝒃𝒂𝒄𝒌',
        serverMessageId: 0
    },
    externalAdReply: {
        title: "𝑱.𝑨.𝑵 𝑩𝑶𝑻",
        body: "𝑱.𝑨.𝑵 𝑩𝑶𝑻 𝐼𝑆 𝑇𝐻𝐸 𝐵𝐸𝑆𝑇🩸",
        thumbnailUrl: img,
        sourceUrl: '',
        mediaType: 1,
        renderLargerThumbnail: true
    }
});
