const { Client, MessageEmbed } = require('discord.js');
const client = new Client({intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS']});

const channelID = 'YourChannelID';
const token = 'YourToken';

client.on('ready', () => {
    console.log(`Logging » Ready to serve.`);
});

client.on('messageDelete', async (message) => {
    const channel = client.channels.cache.get(channelID);
    const Embed = new MessageEmbed()
        .setAuthor(`🗑️  Message Deleted`)
        .setColor('#e74c3c')

        .setDescription(`**User**: ${message.author} | \`${message.author.username}#${message.author.discriminator}\`\n**Channel**: ${message.channel} | \`#${message.channel.name}\`\n**Message**: ${message.content}`)

        .setTimestamp()

    channel.send({embeds: [Embed]});
});

client.on('messageUpdate', async (oldMessage, newMessage) => {
    const channel = client.channels.cache.get(channelID);
    const Embed = new MessageEmbed()
        .setAuthor(`✏️  Message Edited`)
        .setColor('#fdcb6e')

        .setDescription(`**User**: ${oldMessage.author} | \`${oldMessage.author.username}#${oldMessage.author.discriminator}\`\n**Channel**: ${oldMessage.channel} | \`#${oldMessage.channel.name}\`\n**Old Message**: ${oldMessage.content}\n**New Message**: ${newMessage.content}`)

        .setTimestamp()

    channel.send({embeds: [Embed]});
});

client.login(`${token}`);