// سياق رسالة متوافق مع قنواتك ومحمي من الكراش والتأخير
const cleanContext = (jid) => ({
    mentionedJid: [jid],
    isForwarded: true,
    forwardingScore: 1,
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363401670228863@newsletter',
        newsletterName: '𝑭𝒍𝒂𝒔𝒉𝒃𝒂𝒄𝒌',
        serverMessageId: 0
    }
});

async function handler(m, { conn }) {
    const coverImageUrl = 'https://ibb.co/sSK8chJ';

    const sections = [{
        title: "📢 ┇ خيارات الاستدعاء المتاحة",
        rows: [
            {
                title: "📢 ┇ منشن الكل",
                description: "استدعاء كافة المشرفين والأعضاء بالترتيب",
                id: ".منشن_الكل"
            },
            {
                title: "👥 ┇ منشن الأعضاء",
                description: "استدعاء الأعضاء العاديين فقط دون الإدارة",
                id: ".منشن_اعضاء"
            },
            {
                title: "👑 ┇ منشن المشرفين",
                description: "استدعاء طاقم الإدارة والمشرفين فقط",
                id: ".منشن_مشرفين"
            }
        ]
    }];

    const menuText = `❐═━━━═╊⊰🩸⊱╉═━━━═❐\n*⚙️ ┇ نـظـام الـمـنـشـن الـتـفـاعـلـي*\n❐═━━━═╊⊰🩸⊱╉═━━━═❐\n\n✨ *مرحباً بك يا مشرف، اضغط على القائمة أدناه لتنبيه المجموعة فوراً.*`;
    
    // استخدام الدالة المخصصة والناجحة في بوتك
    await conn.sendButtonNormal(m.chat, {
        media: { url: coverImageUrl },
        mediaType: 'image',
        caption: menuText,
        buttons: [
            {
                name: "single_select",
                params: {
                    title: "اختر نوع المنشن📜",
                    sections: sections
                }
            }
        ],
        mentions: [m.sender],
        contextInfo: cleanContext(m.sender)
    }, m);
}

handler.usage = ["منشن"];
handler.category = "admin";
handler.command = ["منشن", "منشنز", "mention"];
handler.admin = true;
handler.group = true;

export default handler;
