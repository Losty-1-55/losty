///////////////////////////
// Invalid:- Do not copy my codes
///////////////////////////

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('1206103112302207036') // Keep this as it is
    .setType('STREAMING') // You can Set Any other like PLAYING, LISTENING, STREAMING
    .setURL('https://dsc.gg/losty-g3n') //set any youtube or twitch link
    .setState('Join Now..!') // set any Status
  
    .setName('Lost™ G3N') // add your name
    .setDetails('Lost™ Coding') // set your status
    /*.setParty({
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/
    
    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1221679558093312085/1229402162782539867/ezgif-7-24b7a272ee-removebg-preview.png?ex=664007bc&is=663eb63c&hm=061a8f5c3627ad15f27c193b41b864efe605e242873a29a578ebdc888ab61369&') // add image link (form: .png, .gif')
    .setAssetsLargeText('Dm Me To Buy Accounts For Cheap') // set image name (type any name)
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1212931761835745320.gif?v=1&size=48&quality=lossless') // add image link (form: .png, .gif).
    .setAssetsSmallText('accounts') // set image name (type any name)
    .addButton('Lost™ G3N <3', 'https://discord.gg/XY4Fp88uVU') // add button name and paste the link like discord server, youtube channel, etc.
    .addButton('Lost™ Shop <3', 'https://discord.gg/uMaR2Xbx75') // add button name and paste the link like discord server, youtube channel, etc.
     client.user.setActivity(r);
     client.user.setPresence({ status: "idle" }); // set your status (online,dnd, idle)
})

client.login(process.env.TOKEN)
