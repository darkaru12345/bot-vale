const {
    Client,
    MessageEmbed
} = require("discord.js");
 
const Discord = require('discord.js');
 
const bot = new Discord.Client();
 
const token = "ODA2Njc5MTA2MzMwNjg5NTU2.YBs8dg.ttbcVxuMoD1D1KgLJRwEoqI-JiA";
 
const PREFIX = "v";

const keepAlive = require('./server');
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'https://MonthlyUntriedCell.frutty790.repl.co',
    title: 'Secundario',
    interval: 30 // minutes
});
 
monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error));

bot.on('ready', () => {
    console.log('I am online master');
    bot.user.setActivity('al Esclavo', {
        type: 'WATCHING'
    });
})
 
function doKissAction() {
    var rand = [
        'https://i.pinimg.com/originals/e3/4e/31/e34e31123f8f35d5c771a2d6a70bef52.gif',
        'https://thumbs.gfycat.com/AgedWhisperedBarnacle-small.gif',
        'https://media1.tenor.com/images/ba1841e4aeb5328e41530d3289616f46/tenor.gif?itemid=14240425',
        'https://media1.tenor.com/images/e8279efa48706a643238272753531abd/tenor.gif?itemid=16741492'
    ];
 
    return rand[Math.floor(Math.random() * rand.length)];
}
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case '!kiss':
if(!args[1] ) {
    message.channel.send('Mising arguments!');
} else {
          const personTagged = message.mentions.members.first();
          const acceptedEmbed = new Discord.MessageEmbed()
          .setColor("#FE66F9")
          .setImage(doKissAction())
          .setDescription('`' + message.author.username + '`' + ' Le dio un beso a ' + personTagged.displayName + ' ')
          message.channel.send(acceptedEmbed);
        //    personTagged.send();
}
 
    break; 
 
   }
})
 
function doHuggAction() {
    var rand = [
        'https://media1.tenor.com/images/195ec8f45c728b30e988b98764bd293c/tenor.gif?itemid=14102400',
        'https://media0.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif',
        'http://25.media.tumblr.com/tumblr_ma7l17EWnk1rq65rlo1_500.gif'
    ];
 
    return rand[Math.floor(Math.random() * rand.length)];
}
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case '!hug':
if(!args[1] ) {
    message.channel.send('Mising arguments!');
} else {
          const personTagged = message.mentions.members.first();
          const acceptedEmbed = new Discord.MessageEmbed()
          .setColor("#FE66F9")
          .setImage(doHuggAction())
          .setDescription('`' + message.author.username + '`' + ' Le dio un abrazo a ' + personTagged.displayName + ' ')
          message.channel.send(acceptedEmbed);
        //    personTagged.send();
}
 
    break; 
 
   }
})

function doPatAction() {
    var rand = [
        'https://gifimage.net/wp-content/uploads/2018/10/anime-head-pats-gif.gif',
        'https://i.postimg.cc/hPd8RCrh/pat-1.gif',
        'https://i.pinimg.com/originals/d7/c3/26/d7c326bd43776f1e0df6f63956230eb4.gif'
    ];
 
    return rand[Math.floor(Math.random() * rand.length)];
}
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case '!pat':
if(!args[1] ) {
    message.channel.send('Mising arguments!');
} else {
          const personTagged = message.mentions.members.first();
          const acceptedEmbed = new Discord.MessageEmbed()
          .setColor("#FE66F9")
          .setImage(doPatAction())
          .setDescription('`' + message.author.username + '`' + ' Acariciá a ' + personTagged.displayName + ' ')
          message.channel.send(acceptedEmbed);
        //    personTagged.send();
}
 
    break; 
 
   }
})

function doKillAction() {
    var rand = [
        'https://pa1.narvii.com/6508/0ec51f0bb17d3ea589bdbbd2b983714cb12ad910_hq.gif',
        'https://media1.tenor.com/images/e05bd7bb432b2076effe841aa7b96dd3/tenor.gif?itemid=8031922',
        'https://media1.tenor.com/images/25f853a32137e24b11cd13bc2142f63a/tenor.gif?itemid=7172028'
    ];
 
    return rand[Math.floor(Math.random() * rand.length)];
}
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case '!kill':
if(!args[1] ) {
    message.channel.send('Mising arguments!');
} else {
          const personTagged = message.mentions.members.first();
          const acceptedEmbed = new Discord.MessageEmbed()
          .setColor("#FE66F9")
          .setImage(doKillAction())
          .setDescription('`' + message.author.username + '`' + ' Acaba de matar a ' + personTagged.displayName + ' ')
          message.channel.send(acceptedEmbed);
        //    personTagged.send();
}
 
    break; 
 
   }
})

function doPokeAction() {
    var rand = [
       'https://media1.tenor.com/images/8fe23ec8e2c5e44964e5c11983ff6f41/tenor.gif?itemid=5600215',
       'https://2.bp.blogspot.com/-XwyXaxcJAWc/WHrzJC9sMqI/AAAAAAAAtV8/WjyZEGokADUcf3lYNo3KTwyN6UHytpgPwCPcB/s1600/Omake%2BGif%2BAnime%2B-%2BDemi-chan%2Bwa%2BKataritai%2B-%2BEpisode%2B2%2B-%2BHikari%2BPokes%2BKyouko.gif',
       'https://i.pinimg.com/originals/67/11/dd/6711ddf3a591bbc99aab173f3c0190de.gif'
    ];
 
    return rand[Math.floor(Math.random() * rand.length)];
}
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case '!poke':
if(!args[1] ) {
    message.channel.send('Mising arguments!');
} else {
          const personTagged = message.mentions.members.first();
          const acceptedEmbed = new Discord.MessageEmbed()
          .setColor("#FE66F9")
          .setImage(doPokeAction())
          .setDescription('`' + message.author.username + '`' + ' Fastidia a  ' + personTagged.displayName + ' ')
          message.channel.send(acceptedEmbed);
        //    personTagged.send();
}
 
    break; 
 
   }
})

function doSlapeAction() {
    var rand = [
       'https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif',
       'https://media1.tenor.com/images/dcd359a74e32bca7197de46a58ec7b72/tenor.gif?itemid=12396060',
       'https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943'
    ];
 
    return rand[Math.floor(Math.random() * rand.length)];
}
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case '!slap':
if(!args[1] ) {
    message.channel.send('Mising arguments!');
} else {
          const personTagged = message.mentions.members.first();
          const acceptedEmbed = new Discord.MessageEmbed()
          .setColor("#FE66F9")
          .setImage(doSlapeAction())
          .setDescription('`' + message.author.username + '`' + ' Le dio una bofetada a  ' + personTagged.displayName + ' ')
          message.channel.send(acceptedEmbed);
        //    personTagged.send();
}
 
    break; 
 
   }
})

function doLuxAction() {
    var rand = [
       'https://media1.tenor.com/images/25e63f334ce7aa3fee142d2bb8e13c53/tenor.gif?itemid=15779346',

    ];
 
    return rand[Math.floor(Math.random() * rand.length)];
}
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case '!faq':
if(!args[0] ) {
    message.channel.send('Mising arguments!');
} else {
          
          const acceptedEmbed = new Discord.MessageEmbed()
          .setColor("#FE66F9")
          .setImage(doLuxAction())
          .setDescription('FAQ')
          message.channel.send(acceptedEmbed);
        //    personTagged.send();
}
 
    break; 
 
   }
})


function doSipAction() {
    var rand = [
       'https://c10.patreonusercontent.com/3/eyJ3Ijo0MDB9/patreon-media/p/reward/4144834/7522e3e976da42e4ae01d766ab4af314/1.gif?token-time=2145916800&token-hash=fjgZO8bBF9GDrtsBrhUlBXzMcl4qsGzzUJA3PzkxaMA%3D',
       'https://media1.tenor.com/images/8b6421b8aaf7ea93fa669e01cfbafede/tenor.gif?itemid=11566439',
       'https://pa1.narvii.com/6210/442511f77e226a90c5c38a790578e4448fa3cc00_hq.gif'

    ];
 
    return rand[Math.floor(Math.random() * rand.length)];
}
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case '!sip':
if(!args[0] ) {
    message.channel.send('Mising arguments!');
} else {
          
          const acceptedEmbed = new Discord.MessageEmbed()
          .setColor("#FE66F9")
          .setImage(doSipAction())
          .setDescription('`' + message.author.username + '`' + 'Esta bebiendo té.')
          message.channel.send(acceptedEmbed);
        //    personTagged.send();
}
 
    break; 
 
   }
})

function doPoutAction() {
    var rand = [
      'https://media1.tenor.com/images/c8bf65854104f13e8e2cdc9453c5222f/tenor.gif?itemid=8687045',
      'https://media0.giphy.com/media/TEJe85dPYW0Uw/giphy-downsized-large.gif',
      'https://38.media.tumblr.com/4018257a1a21e999cd1fdbcd67f38a1d/tumblr_nham95OVWg1rgfa0po1_500.gif'

    ];
 
    return rand[Math.floor(Math.random() * rand.length)];
}
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case '!pout':
if(!args[0] ) {
    message.channel.send('Mising arguments!');
} else {
          
          const acceptedEmbed = new Discord.MessageEmbed()
          .setColor("#FE66F9")
          .setImage(doPoutAction())
          .setDescription('`' + message.author.username + '`' + 'Esta haciendo pucheros.')
          message.channel.send(acceptedEmbed);
        //    personTagged.send();
}
 
    break; 
 
   }
})

function doSleepAction() {
    var rand = [
      'https://media1.tenor.com/images/bad0e118dc9e1f66f8baf9291112c989/tenor.gif?itemid=12048173',
      'https://media1.tenor.com/images/a7e8e8f9fd0a8784012d8f14b09da4a8/tenor.gif?itemid=12048209',
      'https://data.whicdn.com/images/64419015/original.gif'

    ];
 
    return rand[Math.floor(Math.random() * rand.length)];
}
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case '!sleep':
if(!args[0] ) {
    message.channel.send('Mising arguments!');
} else {
          
          const acceptedEmbed = new Discord.MessageEmbed()
          .setColor("#FE66F9")
          .setImage(doSleepAction())
          .setDescription('`' + message.author.username + '`' + 'Tiene sueño o se fue a dormir.')
          message.channel.send(acceptedEmbed);
        //    personTagged.send();
}
 
    break; 
 
   }
})

bot.login(token);