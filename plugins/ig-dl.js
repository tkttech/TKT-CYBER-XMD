const config = require('../config');
const { cmd } = require('../command');
const fetch = require('node-fetch');

cmd({
    pattern: "igvid",
    alias: ["insta", "igdl", "instagram"],
    react: "🎥",
    desc: "Download Instagram videos only",
    category: "downloader",
    use: '.igvid <Instagram URL>',
    filename: __filename
},
async (conn, mek, m, { from, prefix, quoted, q, reply }) => {
    try {
        if (!q || !q.startsWith('http')) {
            return reply(`✳️ Please provide a valid Instagram URL.\nExample: ${prefix}igvid <URL>`);
        }

        // Waiting reaction
        await conn.sendMessage(from, {
            react: { text: "⏳", key: m.key }
        });

        const response = await fetch(`https://delirius-apiofc.vercel.app/download/instagram?url=${encodeURIComponent(q)}`);
        if (!response.ok) throw new Error("Failed to fetch from Instagram API");

        const json = await response.json();
        if (!json.data || !Array.isArray(json.data)) throw new Error("Invalid API response structure");

        const videos = json.data.filter(item => item.url && item.url.endsWith('.mp4'));
        if (!videos.length) {
            await conn.sendMessage(from, { react: { text: "❌", key: m.key } });
            return reply("❌ No videos found in the Instagram post.");
        }

        // Success reaction
        await conn.sendMessage(from, {
            react: { text: "✅", key: m.key }
        });

        for (const video of videos) {
            await conn.sendMessage(from, {
                video: { url: video.url },
                mimetype: "video/mp4",
                caption: `╭━━━〔 *TKT-CYBER-XMD* 〕━━━┈⊷\n┃▸ *Instagram Video*\n╰────────────────┈⊷\n> *© Powered TAFADZWA-TKT♡*`
            }, { quoted: mek });
        }

    } catch (e) {
        console.error("IGVID ERROR:", e.message || e);
        await conn.sendMessage(from, { react: { text: "❌", key: m.key } });
        await reply("❎ An error occurred while processing your request.");
    }
});
