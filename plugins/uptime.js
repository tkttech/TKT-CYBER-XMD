const { cmd } = require('../command');
const moment = require('moment-timezone');

cmd({
  pattern: "uptime",
  alias: ["up"],
  desc: "Check how long the bot has been online.",
  category: "system",
  filename: __filename,
}, async (Void, m, text) => {
  const runtime = () => {
    let seconds = process.uptime();
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = Math.floor(seconds % 60);
    return `${hours}h ${minutes}m ${secs}s`;
  };

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

  const uptimeText = `*🤖 ♻️TKT-CYBER-XMD♻️ Bot Uptime:*\n🕒 ${runtime()}\n\n💡 The bot has been running without interruption.`;

  await Void.sendMessage(m.chat, {
    text: uptimeText,
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363418027651738@newsletter",
        newsletterName: "TKT-TECH Official"
      },
      externalAdReply: {
        title: "TKT-XMD",
        body: "𝚄𝙿𝚃𝙸𝙼𝙴 𝙼𝙾𝙽𝙸𝚃𝙾𝚁 𝙱𝚈 𝚃𝙺𝚃-𝚃𝙴𝙲𝙷",
        thumbnailUrl: "https://files.catbox.moe/ej4vf6.jpg",
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: true,
        sourceUrl: "https://github.com/tkttech"
      }
    }
  }, { quoted: fakeContact });
});
