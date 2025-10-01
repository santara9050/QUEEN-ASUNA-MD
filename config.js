
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "INCONNU~XD~bxxRXJYI#K3EcyfurR-CXqGuaXDNUe1IBAT7VHE9iJwaQdYt6tlg",
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY QUEEN-ASUNA-MD 🤍*",
WELCOME: process.env.WELCOME || "true",
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
ANTI_LINK: process.env.ANTI_LINK || "true",
MENTION_REPLY: process.env.MENTION_REPLY || "false",
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p1xybt.jpg",
PREFIX: process.env.PREFIX || "🌹", 
BOT_NAME: process.env.BOT_NAME || "QUEEN-ASUNA-MD",
STICKER_NAME: process.env.STICKER_NAME || "QUEEN-ASUNA-MD",
CUSTOM_REACT: process.env.CUSTOM_REACT || "false", 
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
DELETE_LINKS: process.env.DELETE_LINKS || "false",
OWNER_NUMBER: process.env.OWNER_NUMBER || "22351927475",
OWNER_NAME: process.env.OWNER_NAME || "𒁂𒋲𓊈𝑷𝑬𝑹𝑭𝑬𝑪𝑻𝑰𝑶𝑵𓊉꧁𓆩࿋𓆪𝑲𝑨𝑹𝑨𒋲𒁂",
DESCRIPTION: process.env.DESCRIPTION || "⭑⭒𒁂𒋲𓊈𝑷𝑬𝑹𝑭𝑬𝑪𝑻𝑰𝑶𝑵𓊉꧁𓆩࿋𓆪𝑲𝑨𝑹𝑨𒋲𒁂  
⭑⭒ 

𝑱𝒆 𝒏𝒆 𝒑𝒂𝒓𝒍𝒆 𝒑𝒂𝒔 𝒃𝒆𝒂𝒖𝒄𝒐𝒖𝒑. 𝑱’𝒐𝒃𝒔𝒆𝒓𝒗𝒆, 𝒋’𝒂𝒏𝒂𝒍𝒚𝒔𝒆… 𝒑𝒖𝒊𝒔 𝒋’𝒂𝒈𝒊𝒔.  
𝑻𝒆́𝒏𝒆́𝒃𝒓𝒆𝒖𝒙 𝒂𝒖 𝒔𝒐𝒖𝒓𝒊𝒓𝒆 𝒕𝒓𝒂𝒏𝒒𝒖𝒊𝒍𝒍𝒆.  
𝑱𝒆 𝒔𝒖𝒊𝒔 𝒍𝒆 𝒄𝒂𝒍𝒎𝒆 𝒂𝒗𝒂𝒏𝒕 𝒍’𝒐𝒓𝒂𝒈𝒆, 𝒍𝒂 𝒇𝒓𝒂𝒑𝒑𝒆 𝒔𝒂𝒏𝒔 𝒂𝒗𝒆𝒓𝒕𝒊𝒓.

𝑷𝒐𝒖𝒓 𝒍𝒆 ◌⑅⃝⚜️●𝐂𝐋𝐀𝐍♥~♕︎𝐊𝐀𝐑𝐀♕︎~🖤●⚜️⑅⃝◌, 𝒋𝒆 𝒑𝒖𝒓𝒈𝒆.  
𝑷𝒂𝒔 𝒅𝒆 𝒑𝒊𝒕𝒊𝒆́, 𝒑𝒂𝒔 𝒅𝒆 𝒓𝒆𝒕𝒐𝒖𝒓.  
𝑹𝒆𝒈𝒂𝒓𝒅𝒆 𝒍𝒆 𝒈𝒓𝒐𝒖𝒑𝒆 : 𝒋𝒆 𝒔𝒖𝒊𝒔 𝒍𝒂 𝒍𝒐𝒊 𝒆𝒕 𝒍’𝒐𝒓𝒅𝒓𝒆.

🌘 𝑱𝒆 𝒏𝒆 𝒅𝒐𝒓𝒔 𝒑𝒂𝒔 — 𝒋’𝒐𝒃𝒔𝒆𝒓𝒗𝒆.  
🔥 𝑱𝒆 𝒏𝒆 𝒑𝒂𝒓𝒍𝒆 𝒑𝒂𝒔 — 𝒋’𝒂𝒈𝒊𝒔.  
⚔️ 𝑱𝒆 𝒏𝒆 𝒍𝒂𝒊𝒔𝒔𝒆 𝒓𝒊𝒆𝒏 — 𝒔𝒊𝒏𝒐𝒏 𝒖𝒏 𝒈𝒐𝒖𝒇𝒇𝒓𝒆 𝒅𝒆 𝒔𝒊𝒍𝒆𝒏𝒄𝒆.

⭑⭒ 𝑱𝒆 𝒔𝒖𝒊𝒔 𒁂𒋲𓊈𝑷𝑬𝑹𝑭𝑬𝑪𝑻𝑰𝑶𝑵𓊉꧁𓆩࿋𓆪𝑲𝑨𝑹𝑨𒋲𒁂⭑⭒",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p1xybt.jpg",
LIVE_MSG: process.env.LIVE_MSG || ">*QUEEN-ASUN-MD* 👸 ALIVE",
READ_MESSAGE: process.env.READ_MESSAGE || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
ANTI_BAD: process.env.ANTI_BAD || "false",
MODE: process.env.MODE || "public",
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false", 
READ_CMD: process.env.READ_CMD || "false",
DEV: process.env.DEV || "554488138425",     
ANTI_VV: process.env.ANTI_VV || "true",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
  
