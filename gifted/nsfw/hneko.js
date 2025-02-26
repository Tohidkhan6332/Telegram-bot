module.exports = {
    command: ['hneko'],
    desc: 'Random h. neko',
    category: ['nsfw'],
    settings: {
        private: true
    },
    async run(m, { Gifted, fetchJson }) {
        Gifted.reply({ text: giftechMess.wait }, m)
	    const giftedRes = await fetchJson('https://api.waifu.pics/nsfw/neko')
	    let giftedButtons = [
            [
                { text: '🔁', feature: 'hneko' },
            ]
        ]
        await Gifted.reply({ image: giftedRes.url, caption: `Random Nsfw Neko` }, giftedButtons, m)
    },
};
