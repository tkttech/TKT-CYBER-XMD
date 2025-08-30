const { cmd } = require('../command');
const moment = require('moment-timezone');

cmd({
  pattern: "support",
  alias: ["supportgroup", "help", "channel"],
  desc: "Get TKT-XMD support, channel & developer contact",
  category: "system",
  filename: __filename,
}, async (Void, m, text) => {

  const jtime = moment.tz('Africa/Harare').format("HH:mm:ss");
  const jdate = moment.tz('Africa/Harare').format("DD/MM/YY");

  // 🧾 Fake Verified Contact
  const fakeContact = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      contactMessage: {
        displayName: "TKT-TECH | TKT-XMD",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:TKT-TECH | TKT-XMD\nORG:TKT-TECH;\nTEL;type=CELL;type=VOICE;waid=263700000000:+263 700 000000\nEND:VCARD`,
        jpegThumbnail: Buffer.alloc(0)
      }
    }
  };

  const contextInfo = {
    externalAdReply: {
      title: "📞 TKT-XMD • Support & Channel",
      body: `🕒 ${jtime} | 📅 ${jdate}`,
      thumbnailUrl: 'https://files.catbox.moe/ej4vf6.jpg',
      sourceUrl: 'https://whatsapp.com/channel/0029Vb5vbMM0LKZJi9k4ED1a',
      mediaType: 1,
      renderLargerThumbnail: true,
      showAdAttribution: true
    },
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363418027651738@newsletter",
      newsletterName: "TKT-XMD Official"
    }
  };

  const supportText = `*🛠️ TKT-XMD Support Center*\n\n╭─☬ *Support Links*\n│👥 Group: https://chat.whatsapp.com/Cz5OQeRIHAT2fZk6sDiNQC?mode=r_t?\n│📡 Channel: https://whatsapp.com/channel/0029Vb5vbMM0LKZJi9k4ED1a\n│📞 Dev: wa.me/263718095555 (꧁𓊈𒆜𝐓𝐊𝐓 𝐓𝐄𝐂𝐇𒆜𓊉꧂)\n╰───────────────╮\n\n📌 Feel free to ask for help, request features or report bugs.\n\n⏰ *Time:* ${jtime}\n📅 *Date:* ${jdate}\n\n*Powered by TKT-TECH*`;

  await Void.sendMessage(m.chat, {
    text: supportText,
    contextInfo
  }, { quoted: fakeContact });
});
