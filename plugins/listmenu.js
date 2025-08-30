const fs = require('fs');
const path = require('path');
const { cmd } = require('../command');
const moment = require('moment-timezone');

cmd({
  pattern: "listmenu",
  alias: ["commandlist", "help"],
  desc: "Fetch and display all available bot commands",
  category: "system",
  filename: __filename,
}, async (Void, m, text) => { // removed { prefix } from params
  try {
    const commandDir = path.join(__dirname, '../plugins');
    const commandFiles = fs.readdirSync(commandDir).filter(file => file.endsWith('.js'));

    let totalCommands = 0;
    let commandList = [];

    for (const file of commandFiles) {
      const filePath = path.join(commandDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const matches = content.match(/pattern:\s*["'`](.*?)["'`]/g);
      
      if (matches) {
        const extracted = matches.map(x => x.split(':')[1].replace(/["'`,]/g, '').trim());
        totalCommands += extracted.length;
        commandList.push(`📁 *${file}*\n${extracted.map(cmd => `╰➤ \`${cmd}\``).join('\n')}`);
      }
    }

    const time = moment().tz('Africa/Nairobi').format('HH:mm:ss');
    const date = moment().tz('Africa/Nairobi').format('dddd, MMMM Do YYYY');

    const caption = `╭━━〔 ♻️𝐓𝐊𝐓-𝐗𝐌𝐃 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐋𝐢𝐬𝐭♻️ 〕━━⬣
┃ 🥃 *Total Commands:* ${totalCommands}
┃ 📅 *Date:* ${date}
┃ ⏰ *Time:* ${time}
╰━━━━━━━━━━━━━━━━━━━━⬣\n\n${commandList.join('\n\n')}`;

    await Void.sendMessage(m.chat, {
      image: { url: "https://files.catbox.moe/ej4vf6.jpg" },
      caption,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        mentionedJid: [m.sender],
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363418027651738@newsletter",
          newsletterName: "𝐓𝐊𝐓-𝐓𝐄𝐂𝐇 𝐇𝐔𝐁 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋",
          serverMessageId: 2
        },
        externalAdReply: {
          title: "TKT-XMD Plugin List",
          body: `©️𝐩𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐓𝐊𝐓-𝐓𝐄𝐂𝐇`,
          mediaType: 1,
          sourceUrl: "https://github.com/tkttech/TKT-CYBER-XMD",
          renderLargerThumbnail: false,
          showAdAttribution: true
        }
      }
    }, {
      quoted: {
        key: {
          fromMe: false,
          participant: '0@s.whatsapp.net',
          remoteJid: 'status@broadcast'
        },
        message: {
          contactMessage: {
            displayName: "𝐓𝐊𝐓-𝐗𝐌𝐃 | ©️𝐩𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐓𝐊𝐓-𝐓𝐄𝐂𝐇",
            vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:TKT-XMD | TKT-TECH\nORG:tkttech;\nTEL;type=CELL;type=VOICE;waid=263781400473:+263718095555\nEND:VCARD`,
            jpegThumbnail: Buffer.alloc(0)
          }
        }
      }
    });

  } catch (err) {
    console.error(err);
    await m.reply('❌ Error: Could not fetch the command list.');
  }
});
