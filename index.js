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
    .setType('LISTENING') // You can Set Any other like PLAYING, LISTENING, STREAMING
    .setURL('https://discord.gg/eKb7HWAWcS') //set any youtube or twitch link
    .setState('JOIN NOW..!!') // set any Status
  
    .setName('-͟͟͞ᗰᑕ™〢! ᒪᗝᔕ丅™ $$') // add your name
    .setDetails('-͟͟͞ᗰᑕ™〢! ᒪᗝᔕ丅™ $$ Coding') // set your status
    /*.setParty({
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/
    
    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1206099442244128808/1207268271649325117/moon-anime.gif?ex=65df0731&is=65cc9231&hm=4e407dd1b01642bc17739a6e48600637bcc56a59d4d642362a0431e2a8800fad&') // add image link (form: .png, .gif').
    .setAssetsLargeText('-͟͟͞Love u All <3') // set image name (type any name)
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1206099442244128808/1207267503693111337/20240213_214602_0000.png?ex=65df067a&is=65cc917a&hm=7507a2e923e4c04132bd0df15cf2d717ee45872d961618c78ab268dc717ee198&') // add image link (form: .png, .gif).
    .setAssetsSmallText('-͟͟͞ᗰᑕ™〢! ᒪᗝᔕ丅™ $$ Coding') // set image name (type any name)
    .addButton('ᒪᗝᔕ丅™ G3N <3', 'https://discord.gg/rgmJ6Vtm9c') // add button name and paste the link like discord server, youtube channel, etc.
    .addButton('FR3AK G3N <3', 'https://discord.gg/r8EQ5nRZa8') // add button name and paste the link like discord server, youtube channel, etc.
     client.user.setActivity(r);
     client.user.setPresence({ status: "dnd" }); // set your status (online,dnd, idle)
})

client.login(process.env.TOKEN)
