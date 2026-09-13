export default async function before(m, { conn }) {

  const videos = {
    "لايت": "https://files.catbox.moe/tdvci0.mp4",
    "بوت": "https://files.catbox.moe/tdvci0.mp4",
    "تست": "https://files.catbox.moe/tdvci0.mp4"
  };

  const text = m.text?.trim();

  if (videos[text]) {

    await conn.sendMessage(
      m.chat,
      {
        video: { url: videos[text] },
        ptv: true,
        mimetype: "video/mp4"
      },
      { quoted: m }
    );

    return true;
  }

  return false;
}
