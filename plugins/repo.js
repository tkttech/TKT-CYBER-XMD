const config = require('../config')
const { cmd } = require('../command')
const os = require("os")
const { runtime, sleep } = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "repo",
    alias: ["sc", "script", "repository"],
    desc: "Show the bot's GitHub repository",
    react: "📂",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/tkttech/TKT-CYBER-XMD';

    try {
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        const response = await axios.get(`https://api.github.com/repos/tkttech/TKT-CYBER-XMD`);
        const repoData = response.data;

        const formattedInfo = `
╭─〔 *TKT-XMD REPOSITORY* 〕
│
├─ *📌 Repo Name:* ${repoData.name}
├─ *👤 Owner:* ${repoData.owner.login}
├─ *⭐ Stars:* ${repoData.stargazers_count}
├─ *⑂ Forks:* ${repoData.forks_count}
├─ *📄 Description:* ${repoData.description || '𝙿𝙾𝚆𝙴𝚁𝙵𝚄𝙻 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙼𝚄𝙻𝚃𝙸-𝙳𝙴𝚅𝙸𝙲𝙴 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙺𝚃-𝚃𝙴𝙲𝙷 '}
│
├─ *🔗 GitHub Link:*
│   ${repoData.html_url}
│
├─ *🌍 Channel:*
│   https://whatsapp.com/channel/0029Vb5vbMM0LKZJi9k4ED1a
│
╰─ *🚀 Powered by TKT-TECH*
`.trim();

        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/ej4vf6.jpg` }, // you can change image
            caption: formattedInfo,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363418027651738@newsletter',
                    newsletterName: 'TKT-XMD UPDATES',
                    serverMessageId: 110
                }
            }
        }, { quoted: {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: "TKT-XMD VERIFIED",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:TKT-XMD;BOT;;;\nFN:TKT-XMD\nitem1.TEL;waid=263700000000:+263 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });

    } catch (error) {
        console.error("❌ Error fetching repo:", error);
        reply("❌ Failed to fetch repository info. Please try again later.");
    }
});
