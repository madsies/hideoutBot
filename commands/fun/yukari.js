const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data : new SlashCommandBuilder()
	.setName('yukari')
	.setDescription('Returns a yukari'),
    async execute(interaction)
    {
        await interaction.reply({text:"meow", files: ["./resources/images/yukari/yukari_portrait.jpg"]})
    }
}