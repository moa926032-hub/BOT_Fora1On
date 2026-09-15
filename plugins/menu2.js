const CATEGORIES = [
    [1, '『 الـتـحـمـيـل 』', 'downloads', '📂'],
    [2, '『 الـمـجـمـوعـات 』', 'group', '🛡️'],
    [3, '『 الـمـلـصـقـات 』', 'sticker', '🃏'],
    [4, '『 الـمـطـوريـن 』', 'owner', '👑'],
    [5, '『 الـدعــــــم 』', 'support', '✳️'],
    [6, '『 الـأدوات 』', 'tools', '⚙️'],
    [7, '『 الـبـحـث 』', 'search', '🔍'],
    [8, '『 الـأدمــــن 』', 'admin', '⚔️'],
    [9, '『 الـألـعـاب 』', 'games', '🎮'],
    [10, '『 الـچـيـف 』', 'gif', '🖼️'],
    [11, '『 الـبـنـك 』', 'bank', '💳'],
    [12, '『 الـذكـاء الاصـطـنـاعـي 』', 'ai', '🤖'],
    [13, '『 الـبـوتـات الـفـرعـيـة 』', 'sub', '⛓️'],
    [14, '『 مـعـلـومـات الـبـوت 』', 'info', '📜'],
    [15, '『 الـنـقـابـــــات 』', 'nicknames', '🏷️'],
    [16, '『 الـلـوجـوهــــات 』', 'logos', '🎨'],
    [17, '『 تـغـيـيـر الأصـوات 』', 'voices', '🎙️'],
    [18, '『 الإسـلامـيـات 』', 'islamic', '🕌']
];

const getCat = n => CATEGORIES.find(c => c[0] === n);

const getImg = (bot) => {
    const images = bot?.config?.info?.images || global.config?.info?.images;
    if (!images) return "https://files.catbox.moe/o9n1ml.jpg";
    return Array.isArray(images) ? images[Math.floor(Math.random() * images.length)] : images;
};

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

async function handler(m, { conn, bot, command, args }) {
    const selected = parseInt(args[0]);
    const now = new Date();
    const uptimeSeconds = process.uptime();
    const hours = Math.floor(uptimeSeconds / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);
    const uptimeFormatted = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const date = now.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
    const time = now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    // مصفوفة قائمة الأقسام المشتركة لإعادة استخدامها
    const sections = [{
        title: "📖 ┇ اقسام البوت ┇ 🩸",
        rows: CATEGORIES.map(c => ({
            title: `${c[0]} ┇ ${c[1]} ${c[3]}`,
            description: `اضغط لعرض أوامر قسم ${c[1]}`,
            id: `.${command} ${c[0]}`
        }))
    }];

    // 1️⃣ القائمة الرئيسية بالأزرار عند كتابة الأمر بدون أرقام
    if (!selected && !args[0]) {
        const menuText = `
#Welcome to ♪ 𝑱.𝑨.𝑵 🩸 𓏺 BOT ⚡
˚.𖦹 ⋅━━┄━┄━┄━┄ ˹👁️˼ ━┄━┄━┄━┄━⋅ 𖦹.˚
🝮 *الـمـسـتـخـدم* ˼👤˹ ⤺
•「 *@⁨𝐌𝐎 𝐅𝐎𝐑𝐀1𝐎𝐍 𖤍⁩* -🩸 」•
🝮 *الـبـوت* ˼🤖˹ ⤺
•「 *𝑱.𝑨.𝑵 𝑩𝑶𝑻* -⚡ 」•
🝮 *حـالـة الـبـوت* ˼🟢˹ ⤺
•「 *𝑶𝑵𝑳𝑰𝑵𝑬* -🩸 」•
🝮 *وقـت الـتـشـغـيـل* ˼⏱️˹ ⤺
•「 *00:00:26* -⚡ 」•

🝮 *الـتـاريـخ* ˼📅˹ ⤺
•「 *١٥ سبتمبر ٢٠٢٦* -🩸 」•

🝮 *الـوقـت* ˼🕐˹ ⤺
•「 *١١:٤٨:٥٦ ص* -⚡ 」•

˚.𖦹 ⋅━━┄━┄━┄━┄ ˹🇪🇬˼ ━┄━┄━┄━┄━⋅ 𖦹.˚
♢ •┆˹‼️╵ *اخـتـر قـسـمـا مـن الـقـائـمـة ادنـاه* ╷⇊˼
♢ 『𒆜  اكـتـب (.شرح) لمـعرفة أوامـر الـبـوت 𒆜』

˚.𖦹 ⋅━━┄━┄━┄━┄ ˹🩸˼ ━┄━┄━┄━┄━⋅ 𖦹.˚
> 𝑱.𝑨.𝑵 𝑩𝑶𝑻 • 𝑺𝒕𝒂𝒚 𝑪𝒐𝒏𝒏𝒆𝒄𝒕𝒆𝒅 🩸
`;
        
        await conn.sendButtonNormal(m.chat, {
            media: { url: "https://files.catbox.moe/o9n1ml.jpg" },
            mediaType: 'image',
            caption: menuText,
            buttons: [
                {
                    name: "single_select",
                    params: {
                        title: "قائمة 📜 الاوامر",
                        sections: sections
                    }
                },
                {
                    name: "cta_url",
                    params: {
                        display_text: "📢 قناة المطور",
                        url: "https://whatsapp.com/channel/0029VbAwIeZ7DAWtP59pqx3c"
                    }
                },
                {
                    name: "quick_reply",
                    params: {
                        display_text: "⚡ تنصيب البوت",
                        id: ".تنصيب"
                    }
                }
            ],
            mentions: [m.sender],
            contextInfo: cleanContext(m.sender)
        }, m);
        return;
    }

    // 2️⃣ عرض أسطر وأوامر القسم المحدد
    const cat = getCat(selected);
    const botImg = getImg(bot);

    if (!cat) {
        await conn.sendMessage(m.chat, { 
            image: { url: botImg },
            caption: '❌ ┇ *اخـتـر رقـمـاً صـحـيـحـاً مـن الـقـائمة فـقـط.*', 
            contextInfo: cleanContext(m.sender) 
        }, { quoted: m });
        return;
    }

    const cmds = await bot.getAllCommands();
    const categoryCmds = cmds.filter(c => c.category === cat[2]);
    
    if (!categoryCmds.length) {
        await conn.sendMessage(m.chat, { 
            image: { url: botImg },
            caption: `❌ ┇ *هـذا الـقـسـم لا يـحـتـوي عـلـى أوامـر حـالـيـاً.*`, 
            contextInfo: cleanContext(m.sender) 
        }, { quoted: m });
        return;
    }

    const cmdsList = categoryCmds.map(c => {
        const usages = Array.isArray(c.usage) ? c.usage : [c.usage];
        return usages
            .filter(Boolean)
            .map(cmd => ` ${cat[3]} ┇ \`.${cmd}\``)
            .join('\n');
    }).join('\n');

    const resultText = `
*╭─────𝐉.𝐀.𝐍 𝐁𝐎𝐓─────╮*
> *القسم: 『 ${cat[1]} ${cat[3]} 』*
> *عدد الأوامر: ${categoryCmds.length} أمر*
*╰─────𝐉.𝐀.𝐍 𝐁𝐎𝐓─────╯*

> *الأوامـر:*

${cmdsList}

> *𝐉.𝐀.𝐍 𝐁𝐎𝐓*
> 𝐒𝐭𝐚𝐲 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝 🩸
`;

    // إرسال كرسالة قائمة تفاعلية تحتوي على الأوامر مع إدراج زر تصفح بقية الأقسام
    await conn.sendButtonNormal(m.chat, {
        media: { url: botImg },
        mediaType: 'image',
        caption: resultText.trim(),
        buttons: [
            {
                name: "single_select",
                params: {
                    title: "تصفح الاقسام الاخرى 📜",
                    sections: sections
                }
            }
        ],
        contextInfo: cleanContext(m.sender)
    }, m);
}

handler.command = ['اوامر','menu'];
export default handler;
