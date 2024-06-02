const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Formats } = require('../../utils/formatting');
const { AttachmentBuilder} = require('discord.js');
// ...


BABY_PINK = 0Xf976b2;
// inside a command, event listener, etc.


module.exports = {
    data : new SlashCommandBuilder()
	.setName('repo')
	.setDescription('Returns a link to the github repo'),
    async execute(interaction)
    {
        const file = new AttachmentBuilder('./resources/images/yukari/yukari_portrait.jpg');
        const gitEmbed = new EmbedBuilder()
	.setColor(BABY_PINK)
	.setTitle('Github Repo')
	.setURL('https://github.com/madsies/hideoutBot')
	//.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('Discord repository for the Git')
	.setThumbnail('https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png')
	.setTimestamp()
	.setFooter({ text: 'Bot By: madsies', iconURL: 'attachment://yukari_portrait.jpg' });

        await interaction.reply({embeds:[gitEmbed], files:[file]});
    }
}