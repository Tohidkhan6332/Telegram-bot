let Giftedd = async (m, { Gifted, text, fetchJson }) => {
    if (!text) {
        Gifted.reply({ text: `Provide Some Text ie ${global.prefix}sd A Cute Cat` }, m);
        return;
    }
  
  Gifted.reply({ text: giftechMess.wait }, m);

    let giftedButtons = [
        [
            { text: 'WaChannel', url: 'https://whatsapp.com/channel/0029VaGyP933bbVC7G0x0i2T' }
        ]
    ];

    try {
        Gifted.downloadAndSend({ image: `${global.giftedApi}/ai/sd?apikey=${global.giftedKey}&prompt=${text}`, caption: giftechMess.done}, giftedButtons, m);
    } catch (error) {
        console.error('Error occurred while fetching AI data:', error);
        Gifted.reply({ text: 'Stable Difussion is Unavailable Right Now.'}, giftedButtons, m);
    }
};

Giftedd.command = ['sd', 'stabledifussion'];
Giftedd.desc = 'Sd Image Generator';
Giftedd.category = ['ai'];

module.exports = Giftedd;
