module.exports = {
    command: ['hwaifu'],
    desc: 'Random h. waifu',
    category: ['nsfw'],
    settings: {
        private: true
    },
    async run(m, { Gifted, fetchJson }) {
        Gifted.reply({ text: giftechMess.wait }, m)
	    const giftedRes = await fetchJson('https://api.waifu.pics/nsfw/waifu')
	    let giftedButtons = [
            [
                { text: '🔁', feature: 'hwaifu' },
            ]
        ]
        await Gifted.reply({ image: giftedRes.url, caption: `Random Nsfw Waifu` }, giftedButtons, m)
    },
};
