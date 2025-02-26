module.exports = {
    command: ['waifu', 'waifupic', 'waifupics'],
    desc: 'Random waifu',
    category: ['anime'],
    async run(m, { Gifted, fetchJson }) {
        Gifted.reply({ text: giftechMess.wait }, m)
	    const giftedRes = await fetchJson('https://api.waifu.pics/sfw/waifu')
	    let giftedButtons = [
            [
                { text: '🔁', feature: 'waifu' },
            ]
        ]
        await Gifted.reply({ image: giftedRes.url, caption: `Random Waifu` }, giftedButtons, m)
    },
};
