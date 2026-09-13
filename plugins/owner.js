let handler = async (m, { conn }) => {
  let img = 'https://ibb.co/sSK8chJ';

  let captionText = `📜 *قَوَانِينُ الـمَطـَوِّرِ | RULES* 📜
❐═━━━═╊⊰🩸⊱╉═━━━═❐

1️⃣ *الدخول بتحية السلام عند التواصل.*
2️⃣ *يمنع الدخول للخاص بهدف الإزعاج أو التكرار.*
3️⃣ *احترام المطور وعدم الاتصال المباشر نهائياً.*
4️⃣ *توضيح طلبك أو مشكلتك في رسالة واحدة مباشرة.*

❐═━━━═╊⊰🩸⊱╉═━━━═❐`;

  await conn.sendButtonNormal(m.chat, {
    media: { url: img },
    mediaType: 'image',
    caption: captionText,
    buttons: [
      {
        name: "cta_url",
        params: {
          display_text: "💬 تواصل مع المطور",
          url: "https://wa.me/201515063273"
        }
      }
    ],
    mentions: [m.sender]
  }, m);
};

handler.command = /^(owner|مطور|المطور)$/i;

export default handler;
