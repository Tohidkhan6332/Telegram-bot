let Giftedd = async (m, { Gifted, text, fetchJson }) => {
    if (!text) {
        Gifted.reply({ text: `Provide Some Text ie ${global.prefix}qr text/link` }, m);
        return;
    }
  
  Gifted.reply({ text: giftechMess.wait }, m);

    let giftedButtons = [
        [
            { text: 'WaChannel', url: 'https://whatsapp.com/channel/0029VaGyP933bbVC7G0x0i2T' }
        ]
    ];

    try {
        Gifted.downloadAndSend({ image: `${global.lyffeApi}/gqr?&text=${text}`, caption: giftechMess.done}, giftedButtons, m);
    } catch (error) {
        console.error('Error occurred while fetching AI data:', error);
        Gifted.reply({ text: 'Api is Unavailable Right Now.'}, giftedButtons, m);
    }
};

Giftedd.command = ['createqr', 'qr'];
Giftedd.desc = 'Qr Generator';
Giftedd.category = ['tools'];

module.exports = Giftedd;
