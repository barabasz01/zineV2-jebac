const cc = require('canvacord')
const { MessageEmbed, MessageAttachment } = require('discord.js')
module.exports.run = async (message, args, client) => {
    let comment = args.join(' ')
    if (!comment) return client.embeds.argsError(message, client.lang.handle(message, this.help.usageen, this.help.usagepl))
    let image = await cc.Canvas.clyde(comment)
    let att = new MessageAttachment(image, 'image.png')
    let embed = new MessageEmbed()
    .setTitle('<a:yes:787665605464424468> Clyde')
    .attachFiles(att)
    .setImage('attachment://image.png')
    .setColor('#5aff73')
    .setFooter(message.client.lang.handle(message, `Invoked on request ${message.author.tag} (${message.author.id})`, `Wywołano na życzenie ${message.author.tag} (${message.author.id})`), message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed)
}
module.exports.help = {
    name: 'clyde',
    descriptionpl: 'Wiadomość wysłana przez Clyde',
    descriptionen: 'Clyde message.',
    usageen: 'clyde <message>',
    usagepl: 'clyde <wiadomość>',
    category: 'Zabawa',
    permsLevel: 1,
}
module.exports.conf = {
    aliases: ['clydebot', 'clydemessage'],
}