const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "pair",
    alias: ["getpair", "clonebot"],
    react: "✅",
    desc: "Get pairing code for TKT-XMD bot",
    category: "download",
    use: ".pair 263718095555",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, args, q, senderNumber, reply }) => {
    try {
        const phoneNumber = q ? q.trim().replace(/[^0-9]/g, '') : senderNumber.replace(/[^0-9]/g, '');

        if (!phoneNumber || phoneNumber.length < 10 || phoneNumber.length > 15) {
            return await reply("❌ Please provide a valid phone number without `+`\nExample: `.pair 263718095555`");
        }

        const res = await axios.get(`https://pk-v33i.onrender.com/code?number=${encodeURIComponent(phoneNumber)}`);
        if (!res.data || !res.data.code) {
            return await reply("❌ Failed to retrieve pairing code. Please try again later.");
        }

        const pairingCode = res.data.code;

        const codeMessage = `
╭─〔 *TKT-XMD PAIRING SUCCESSFUL* 〕
│
├─ *📱 Number:* ${phoneNumber}
├─ *🔗 Pairing Code:* ${pairingCode}
│
╰─ *🚀 Powered by TKT-TECH*
`.trim();

        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/tgy86v.jpg` },
            caption: codeMessage,
            footer: 'Tap below to get code again for copying:',
            templateButtons: [
                {
                    index: 1,
                    quickReplyButton: {
                        displayText: "📋 Copy Code",
                        id: `.copy ${pairingCode}`
                    }
                }
            ],
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363418027651738@newsletter',
                    newsletterName: 'TKT-TECH',
                    serverMessageId: 119
                },
                externalAdReply: {
                    title: "TKT-XMD BOT",
                    body: "Auto pairing code system",
                    thumbnailUrl: `https://files.catbox.moe/4d855s.jpg`,
                    sourceUrl: "https://github.com/tkttech/TKT-CYBER-XMD"
                }
            }
        }, {
            quoted: {
                key: {
                    fromMe: false,
                    participant: "0@s.whatsapp.net",
                    remoteJid: "status@broadcast"
                },
                message: {
                    contactMessage: {
                        displayName: "PK-XMD VERIFIED",
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:BOT;TKT-XMD;;;\nFN:TKT-XMD\nitem1.TEL;waid=263700000000:+263 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                    }
                }
            }
        });

    } catch (error) {
        console.error("❌ Pair command error:", error);
        await reply("❌ Error retrieving pairing code. Try again later.");
    }
});
                    
