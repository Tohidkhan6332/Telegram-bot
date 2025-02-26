module.exports = {
    command: ['neko', 'nekopic', 'nekopics'],
    desc: 'Random neko',
    category: ['anime'],
    async run(m, { Gifted, fetchJson }) {
        Gifted.reply({ text: giftechMess.wait }, m)
	    const giftedRes = await fetchJson('https://api.waifu.pics/sfw/neko')
	    let giftedButtons = [
            [
                { text: '🔁', feature: 'neko' },
            ]
        ]
        await Gifted.reply({ image: giftedRes.url, caption: `Random Neko` }, giftedButtons, m)
    },
};
