const { cmd } = require('../command');
const moment = require('moment-timezone');
const { runtime } = require('../lib/functions');

cmd({
  pattern: "alive",
  desc: "Show bot is running",
  category: "system",
  filename: __filename
}, async (Void, m) => {
  let time = moment.tz('Africa/Harare').format('HH:mm:ss');
  let date = moment.tz('Africa/Harare').format('DD/MM/YYYY');
  let up = runtime(process.uptime());

  let message = `
╭────[ *☯︎ 𝐓𝐊𝐓-𝐗𝐌𝐃 𝐈𝐒 𝐀𝐂𝐓𝐈𝐕𝐄 ☯︎* ]────╮
│
├ 🧿 *Time:* ${time}
├ 🗓 *Date:* ${date}
├ 🥃 *Uptime:* ${up}
│
╰─⭓ ©️ 𝐩𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐓𝐊𝐓-𝐓𝐄𝐂𝐇
`.trim();

  let vcard = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(m.chat ? { remoteJid: "status@broadcast" } : {})
    },
    message: {
      contactMessage: {
        displayName: "𝐓𝐊𝐓-𝐓𝐄𝐂𝐇",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:PK-XMD\nORG:Verified Bot;\nTEL;type=CELL;type=VOICE;waid=254700000000:+254700000000\nEND:VCARD`
      }
    }
  };

  await Void.sendMessage(m.chat, { text: message }, {
    quoted: vcard,
    contextInfo: {
      externalAdReply: {
        title: "𝐓𝐊𝐓-𝐗𝐌𝐃 𝙼𝚄𝙻𝚃𝙸-𝙵𝚄𝙽𝙲𝚃𝙸𝙾𝙽 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃",
        body: "𝙰𝙲𝚃𝙸𝚅𝙴 & 𝚁𝚄𝙽𝙽𝙸𝙽𝙶 - 𝐩𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐓𝐊𝐓-𝐓𝐄𝐂𝐇",
        mediaType: 1,
        renderLargerThumbnail: false,
        showAdAttribution: false,
        sourceUrl: '',
      },
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363418027651738@newsletter",
        serverMessageId: "",
        newsletterName: "𝐓𝐊𝐓-𝐗𝐌𝐃 VΣЯIFIΣD BӨƬ"
      }
    }
  });
});
          
