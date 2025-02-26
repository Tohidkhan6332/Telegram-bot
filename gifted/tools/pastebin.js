const fetch = require('node-fetch');

module.exports = {
    command: ['pastebin', 'getpb'],
    desc: 'Copy content from pastebin',
    category: ['tools'],
    async run(m, { Gifted, text }) {
        if (!text) return Gifted.reply({ text: `Provide a Pastebin Link ie ${global.prefix}pastebin https://pastebin.com/rkbj0rVu` }, m)
        if (!/^https:\/\/pastebin\.com\/[a-zA-Z0-9]+$/.test(text)) return Gifted.reply({ text: 'Invalid url' }, m)
            Gifted.reply({ text: giftechMess.wait }, m)
        const pasteId = text.split('/').pop(); 
        try {
            const response = await fetch(`https://pastebin.com/raw/${pasteId}`);
            if (!response.ok) return Gifted.reply({ text: 'Failed to fetch content from Pastebin.' }, m);
            const content = await response.text();
            if (!content) return Gifted.reply({ text: 'No content found on Pastebin!' }, m);
            Gifted.reply({ text: `\`\`\`\n${content}\n\`\`\``, parse_mode: 'Markdown' }, m);
        } catch (e) {
            console.log(e)
            Gifted.reply({ text: giftechMess.error }, m)
        }
    }
}
