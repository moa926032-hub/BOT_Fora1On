import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';
import { uploadToQuax } from "../../system/utils.js";

const handler = async (m, { conn, command }) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';

  if (!mime) throw '*رد علي الصوره او الفيديو أو الصوت🔗 لتحويله لرابط*';
  
  const media = await q.download();
  const link = await uploadToQuax(media);
  
  await conn.sendButton(m.chat, {
    imageUrl: link,
    bodyText: "🗃️ نجح رفع الصورة على *(catbox.moe)*\n- ```" + link + "```",
    footerText: "𝑱.𝑨.𝑵 𝑩𝑶𝑻",
    buttons: [
      { name: "cta_copy", params: { display_text: "Copy Link", copy_code: link } },
    ],
    mentions: [m.sender],
    newsletter: {
      name: '𝑭𝒍𝒂𝒔𝒉𝒃𝒂𝒄𝒌',
      jid: '120363401670228863@newsletter'
    },
    interactiveConfig: {
      buttons_limits: 10,
      list_title: "𝑱.𝑨.𝑵 𝑩𝑶𝑻",
      button_title: "Click Here",
      canonical_url: "https://vxv-profile.vercel.app"
    }
  }, m);
};

handler.usage = ["لرابط"];
handler.category = "tools";
handler.command = ['لرابط', 'image2url'];

export default handler;
