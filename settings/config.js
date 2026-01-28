const fs = require('fs')

const config = {
    owner: "6281249864586", // Ganti Number Kalian agar bisa mengakses bot
    botNumber: "6281249864586", // Ganti Number Kalian agar bisa mengakses bot
    setPair: "LANZCRAS",
    thumbUrl: "https://files.catbox.moe/tlbp3k.jpg",
    session: "sessions",
    status: {
        public: true, // Ubah Ke false Jika Ingin mode self
        terminal: true, // Jangan di Ubah ke false, kalo gk mau pake qr code
        reactsw: false, // Bebas Ubah, true Auto sw otomatis
    },
    message: {
        owner: "｢ ACCESS DENIED ｣",
        group: "Ketiknya Didalam Group Yang Mau Di Bug Bego.",
        admin: "｢ ACCESS DENIED ｣",
        private: "this is specifically for private chat"
    },
    settings: {
        title: "𝐋𝐚𝐧𝐳𝐌𝐨𝐝𝐬",
        packname: '🩸 --𝐋𝐚𝐧𝐳 - 𝐕𝟏𝟑',
        description: "This Script By DapzyMods",
        author: 'https://telegram.com/Always_Lanz',
        footer: "ジャス - LanzOfc`"
    },
    newsletter: {
        name: "- AlwaysLanz",
        id: "120363416248034655@newsletter"
    },
    socialMedia: {
        YouTube: "https://youtube.com/@",
        GitHub: "https://github.com/alwayslanz2",
        Telegram: "https://t.me/Always_Lanz",
        ChannelWA: "https://whatsapp.com/channel/0029Vb5qdez0bIdiHG8ibj2k"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
