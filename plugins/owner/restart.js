const test = async (m, { conn, bot }) => {
  m.react("🟢")
  
  conn.msgUrl(m.chat, "𝑱.𝑨.𝑵 𝑩𝑶𝑻 𝑰𝑺 𝑹𝑬𝑺𝑻𝑨𝑹𝑻𝑰𝑵𝑮", { 
    title: "𝑱.𝑨.𝑵 𝑩𝑶𝑻",
    body: "𝑻𝑯𝑬 𝑩𝑶𝑻 𝑰𝑺 𝑹𝑬𝑺𝑻𝑨𝑹𝑻𝑰𝑵𝑮 🔁",
    img: "https://g.top4top.io/p_3700yob0b1.jpg",
    big: false 
  });
  
  setTimeout(() => {
    bot.restart();
  }, 1000); 
};

test.usage = ["رستارت"]
test.category = "owner";
test.command = ["رستارت", "restart"];
test.owner = true;
export default test;
