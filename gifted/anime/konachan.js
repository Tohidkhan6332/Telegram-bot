const axios = require('axios'),
      cheerio = require('cheerio');

async function giftedKonachan() {
    try {
        let { giftedData } = await axios.get('https://konachan.net/post?tags=order%3Arandom')
        let $ = cheerio.load(giftedData)
        let img = []
        $('#post-list-posts a.directlink.largeimg').each((index, element) => {
            const gtw = $(element).attr('href')
            img.push(gtw)
        })
        let imgg = img[Math.floor(Math.random() * img.length)]
        return imgg
    } catch (error) {
        console.error(error)
        return error.message
    }
}

module.exports = {
    command: ['konachan'],
    desc: 'Random konachan',
    category: ['anime'],
    async run(m, { Gifted }) {
        try {
            Gifted.reply({ text: giftechMess.wait }, m)
            let giftedButtons = [
                [
                    { text: '🔁', feature: 'konachan' },
                ]
            ]
            await Gifted.reply({ image: await giftedKonachan(), caption: `Random Konachan` }, giftedButtons, m)
        } catch (err) {
            console.log(err)
            Gifted.reply({ text: giftechMess.error }, m)
        }
    },
};
