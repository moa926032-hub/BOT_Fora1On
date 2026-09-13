import os from 'os';

const handler = async (m, { conn }) => {
  const txt = `❐═━━━═╊⊰🩸⊱╉═━━━═❐
╎ الـمسـتـخـدم: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(1)}MB
╎ الـمتـبــقـي: ${(os.freemem() / 1024 / 1024).toFixed(1)}MB
❐═━━━═╊⊰🩸⊱╉═━━━═❐`;

  await conn.sendMessage(m.chat, {
    image: { url: "https://ibb.co/sSK8chJ" },
    caption: txt,
    mentions: [m.sender]
  }, { quoted: m });
};

handler.command = ["الرام", "ram"];
handler.category = "info";
handler.usage = ["الرام", "ram"];

export default handler;
