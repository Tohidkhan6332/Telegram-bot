const axios = require('axios'),
      cheerio = require('cheerio');

let Giftedd = async (m, { Gifted, text }) => {
    if (!text) return Gifted.reply({ text: `Provide some Search Query ie ${prefix}wiki Cat` }, m)
        Gifted.reply({ text: giftechMess.wait }, m)
    const giftedWiki = await giftedWikipedia(text)
    let giftedCap = 
`*${giftedWiki.title}*

"${giftedWiki.desc}"`

 let giftedButtons = [[
          { text: 'WaChannel', url: 'https://whatsapp.com/channel/0029VaGyP933bbVC7G0x0i2T' }
      ]
  ];
      
Gifted.reply({ text: giftedCap, parse_mode: 'Markdown' }, giftedButtons, m)
}

Giftedd.command = ['wikipedia', 'wiki', 'wikimedia']
Giftedd.desc = 'Search for info on Wikipedia'
Giftedd.category = ['search']

module.exports = Giftedd

async function giftedWikipedia(query) {
    try {
        const q = query.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('_')
        
        const { data } = await axios.get(`https://en.m.wikipedia.org/wiki/${q}`)
        const $ = cheerio.load(data)
        
        const result = {
            title: $('h1[id="firstHeading"]').text().trim(),
            desc: $('.mf-section-0 p').text().trim().replace(/\[.*?\]/g, '')
        }
        return result;
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        return error.message;
    }
}
