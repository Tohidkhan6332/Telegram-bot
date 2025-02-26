let Giftedd = async (m, { Gifted }) => {

    let giftedButtons = [[
          { text: 'WaChannel', url: 'https://whatsapp.com/channel/0029VaGyP933bbVC7G0x0i2T' }
      ]
  ];
  
  const uptimeSeconds = process.uptime();
  const days = Math.floor(uptimeSeconds / (24 * 3600));
  const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);
  
      let giftedMess = `Bot Has Been Up For: *${days}d ${hours}h ${minutes}m ${seconds}s*`;
  
  Gifted.reply({ image: { url: global.botPic }, caption: giftedMess, parse_mode: 'Markdown' }, giftedButtons, m)
  }
  
  Giftedd.command = ['uptime', 'runtime']
  Giftedd.desc = 'Show Bot Uptime'
  Giftedd.category = ['general']
  
  module.exports = Giftedd
  
