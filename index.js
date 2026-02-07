require("dotenv").config();

const { Client, GatewayIntentBits, Events } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once(Events.ClientReady, c => {
    console.log(`Encendido como: ${c.user.tag}`);
});

client.on(Events.MessageCreate, message => {
    if (message.author.bot) return;

    if (message.content === '$hola') {
        message.reply('👋 ¡Hola! Todo funcionando perfecto.');
    }
});

// USA UN TOKEN NUEVO AQUÍ (el que resetees)
client.login(process.env.DISCORD_TOKEN);


////////// SISTEMA DE VERFICACIONNNN
require('dotenv').config();
const { 
    Client, 
    GatewayIntentBits,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    PermissionsBitField
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Bot encendido como ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.content === '!verificacion') {

        const button = new ButtonBuilder()
            .setCustomId('verificar_usuario')
            .setLabel('✅ Verificarme')
            .setStyle(ButtonStyle.Success);

        const row = new ActionRowBuilder().addComponents(button);

        message.channel.send({
            content: 'Presiona el botón para verificarte y acceder al servidor.',
            components: [row]
        });
    }
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'verificar_usuario') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Verificado');

        if (!role) {
            return interaction.reply({
                content: 'No se encontró el rol "Verificado".',
                ephemeral: true
            });
        }

        await interaction.member.roles.add(role);

        interaction.reply({
            content: '¡Has sido verificado correctamente!',
            ephemeral: true
        });
    }
});

client.login(process.env.DISCORD_TOKEN);
///////// termina aqui 

require("dotenv").config();

const { Client, GatewayIntentBits, Events } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once(Events.ClientReady, c => {
    console.log(`Encendido como: ${c.user.tag}`);
});

client.on(Events.MessageCreate, message => {
    if (message.author.bot) return;

    if (message.content === '$hola') {
        message.reply('👋 ¡Hola! Todo funcionando perfecto.');
    }
});

// USA UN TOKEN NUEVO AQUÍ (el que resetees)
client.login(process.env.DISCORD_TOKEN);




