const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "TKT-CYBER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUw4VENRZWhxWHI0MDJ5MXRoOGtmUnVObmdFRk1HV01lNFJNRGlYVUZGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDZERlgvTDdRTEdNOXYxZGF1eVRNZy9vdDZnVkkvUnMrZUY5M0Y4Y2pndz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TGNxTHl1MCs0dHI2ZldCQ3N5Y1hMSzZob2pKT05uekxWbnZQZGpOZmwwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxeWh0bmlJQkNFMUZrb2FXRWVOeTBta1FJRis0cnc0eTRCNmRhZzFtZmtvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllPK1lCQWVvdGJkYTRJTmdUaEpMRDlaSEkvWXlaeG1SaWZ3ZTNzYm1pR0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1vU05YaW81TWRPU2dUUlEycG40OXpMeGNxTjRlZHlON2ZQdkRIYXQwakE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdpTkNIVTV3V1BreW9lUDdRdWJvSm8yM3RJd0dJSDdRcElmemJvMmgyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzY3RUs0M09HK3kxMnd2aW9zMnhzdEpuNlZCRktYOVJPNS9RTlFXMjZWUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpQVm9HSXVOQzdnVkRKRlA0TUM3ajN4TDBEdSttRGpSajVUdy90ZGI0U2ZaWHdEVmJzMXFLYnVzeXQrRG45YTVYejZWUytNY2FYdXRKbGQ4RC90aGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgzLCJhZHZTZWNyZXRLZXkiOiI4TVlzNGR2V3EzR3RIdDY2eThRejAvNEhLOCtCMVZ6RHUvcGpRbUpFd0hzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJTUFhXRzJUWSIsIm1lIjp7ImlkIjoiMjYzNzE4MDk1NTU1OjE0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJPwnZCA8J2QhfCdkIDwnZCD8J2QmfCdkJbwnZCALfCdkJPwnZCK8J2QkyIsImxpZCI6Ijc0MzU1MDk0NTk3ODY4OjE0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTEtvK2ZjREVLT3cxTVFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWDJvMWVVbnJWVk5sT1MxNzl6ZDhQbk9mdGRqZWhZdDJ1RDRmU1hNVDBpbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicy9JNVVYTFdZSElDVUVWaHlvMHZNODF3NTVQK010ay9TaXNBemdMb1ltcW1PbWxTdkRqZEhoeXdkYkd4cVNBM3N2bDEwQ29ObEpxRG1Cdkk0aTA4QVE9PSIsImRldmljZVNpZ25hdHVyZSI6Ink1MGRVeVNieU95ZEFCb3RqejkvL2RqNXA4dVdOODhKNDJwdENIR01EdlVNODZtbkhuWEVLL3lLOGMzSDh6bG1oUUlkTzI4aHZsZGRyUmo0UzN1Qmp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE4MDk1NTU1OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlY5cU5YbEo2MVZUWlRrdGUvYzNmRDV6bjdYWTNvV0xkcmcrSDBsekU5SXEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDYwMTUxMSwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMczYifQ==",
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY TKT-XMD🇿🇼*",
WELCOME: process.env.WELCOME || "true",
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
ANTI_LINK: process.env.ANTI_LINK || "true",
MENTION_REPLY: process.env.MENTION_REPLY || "false",
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/ej4vf6.jpg",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "TKT-CYBER-XMD",
STICKER_NAME: process.env.STICKER_NAME || "TKT-TECH",
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
DELETE_LINKS: process.env.DELETE_LINKS || "true",
OWNER_NUMBER: process.env.OWNER_NUMBER || "263718095555",
OWNER_NAME: process.env.OWNER_NAME || "𝚃𝙺𝚃-𝚃𝙴𝙲𝙷",
DESCRIPTION: process.env.DESCRIPTION || "©️𝐩𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐓𝐊𝐓-𝐓𝐄𝐂𝐇",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/y4l7la.jpg",
LIVE_MSG: process.env.LIVE_MSG || "> NDIRI ACTIVE CHIBABA  *TKT-CYBER-XMD*⚡",
READ_MESSAGE: process.env.READ_MESSAGE || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
ANTI_BAD: process.env.ANTI_BAD || "false",
MODE: process.env.MODE || "public",
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
READ_CMD: process.env.READ_CMD || "false",
DEV: process.env.DEV || "263718095555",
ANTI_VV: process.env.ANTI_VV || "true",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
ANTICALL: process.env.ANTICALL || "true"
};
