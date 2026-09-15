let handler = async (m, { conn }) => {
  let img = 'https://files.catbox.moe/o9n1ml.jpg';

  let captionText = `
*╭─────『 𝑱.𝑨.𝑵 𝑩𝑶𝑻 』─────╮*

> *📜 قـوانـيـن الـمـطـور*

*╰────────────────────────╯*

> *❶ ┇ الـدخـول بـتـحـيـة الـسـلام عـنـد الـتـواصـل* 🩸

> *❷ ┇ يـمـنـع الـدخـول لـلـخـاص بـهـدف الإزعـاج أو الـتـكـرار* ⚡

> *❸ ┇ احـتـرام الـمـطـور وعـدم الاتـصـال الـمـبـاشـر نـهـائـيـاً* 👑

> *❹ ┇ تـوضـيـح طـلـبـك أو مـشـكـلـتـك فـي رسـالـة واحـدة مـبـاشـرة* 📩

*╭───────〔 🩸 〕───────╮*
> *𝑱.𝑨.𝑵 𝑩𝑶𝑻*
> *𝑺𝒕𝒂𝒚 𝑪𝒐𝒏𝒏𝒆𝒄𝒕𝒆𝒅 ⚡*
*╰───────〔 🩸 〕───────╯*
`;

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
